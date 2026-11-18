import { type BaseTexture } from "../Materials/Textures/baseTexture";
import { Texture } from "../Materials/Textures/texture.pure";
import { type Scene } from "../scene";
import { RGBDTextureTools } from "./rgbdTextureTools";

let InstanceNumber = 0;

/**
 * Internal function to load and setup BRDF textures
 * @internal
 * @param scene defines the hosting scene
 * @param textureData defines the base64 texture data
 * @param textureProperty defines the scene property name to store the texture
 * @param textureName defines the name for the texture
 * @returns the environment BRDF texture
 */
export const _LoadBRDFTexture = (scene: Scene, textureData: string, textureProperty: string, textureName: string): BaseTexture => {
    if (!(scene as any)[textureProperty]) {
        // Forces Delayed Texture Loading to prevent undefined error whilst setting RGBD values.
        const useDelayedTextureLoading = scene.useDelayedTextureLoading;
        scene.useDelayedTextureLoading = false;

        const previousState = scene._blockEntityCollection;
        scene._blockEntityCollection = false;
        const texture = Texture.CreateFromBase64String(textureData, textureName + InstanceNumber++, scene, true, false, Texture.BILINEAR_SAMPLINGMODE);
        scene._blockEntityCollection = previousState;
        // BRDF Texture should not be cached here due to pre processing and redundant scene caches.
        const texturesCache = scene.getEngine().getLoadedTexturesCache();
        const index = texturesCache.indexOf(texture.getInternalTexture()!);
        if (index !== -1) {
            texturesCache.splice(index, 1);
        }

        texture.isRGBD = true;
        texture.wrapU = Texture.CLAMP_ADDRESSMODE;
        texture.wrapV = Texture.CLAMP_ADDRESSMODE;
        (scene as any)[textureProperty] = texture;

        scene.useDelayedTextureLoading = useDelayedTextureLoading;

        RGBDTextureTools.ExpandRGBDTexture(texture);

        const observer = scene.getEngine().onContextRestoredObservable.add(() => {
            texture.isRGBD = true;
            /**
             * Using scene.onBeforeRenderObservable instead of Tools.SetImmediate to check the texture's state of readiness allows us to check before any rendering occurs.
             * When a context restore occurs, it gives ExpandRGBDTexture the ability to reset the state to false, preventing the texture from being used in any rendering.
             * In WebGPU, not doing so would generate an error because ExpandRGBDTexture performs a _swapAndDie on the texture, which causes WebGPU caches to fail if the texture has already been used for rendering.
             * Only when ExpandRGBDTexture has finished its work, the texture is ready to be used again.
             */
            const oo = scene.onBeforeRenderObservable.add(() => {
                if (texture.isReady()) {
                    scene.onBeforeRenderObservable.remove(oo);
                    RGBDTextureTools.ExpandRGBDTexture(texture);
                }
            });
        });

        scene.onDisposeObservable.add(() => {
            scene.getEngine().onContextRestoredObservable.remove(observer);
        });
    }

    return (scene as any)[textureProperty];
};
