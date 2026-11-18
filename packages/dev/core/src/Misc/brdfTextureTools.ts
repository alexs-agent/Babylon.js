import { GetEnvironmentBRDFTexture } from "./environmentBRDFTexture";
import { GetEnvironmentFuzzBRDFTexture } from "./environmentFuzzBRDFTexture";
import { GetOpenPBREnvironmentBRDFTexture } from "./openPBREnvironmentBRDFTexture";

// Each lookup texture lives in its own module so bundlers only include the ones a material actually uses.
export { GetEnvironmentBRDFTexture, GetEnvironmentFuzzBRDFTexture, GetOpenPBREnvironmentBRDFTexture };

/**
 * Class used to host texture specific utilities
 */
export const BRDFTextureTools = {
    /**
     * Gets a default environment BRDF for MS-BRDF Height Correlated BRDF
     * @param scene defines the hosting scene
     * @returns the environment BRDF texture
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GetEnvironmentBRDFTexture,

    /**
     * Gets a default environment fuzz BRDF texture
     * @param scene defines the hosting scene
     * @returns the environment fuzz BRDF texture
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GetEnvironmentFuzzBRDFTexture,

    /**
     * Gets the OpenPBR environment BRDF texture (3-channel F82 LUT)
     * @param scene defines the hosting scene
     * @returns the OpenPBR environment BRDF texture
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GetOpenPBREnvironmentBRDFTexture,
};
