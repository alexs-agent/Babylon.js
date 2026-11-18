/**
 * Type guards that work like `instanceof` (subclasses included) without loading the class.
 * Use them when a module needs a class only to check an object's type, so that the class
 * (and, for materials, its shaders) is not pulled into bundles that never use it.
 * Each guard reads an always-true getter declared on the class, such as `_isPBRBaseMaterial`.
 * Keep the imports in this file type-only.
 */

import { type ArcRotateCamera } from "../Cameras/arcRotateCamera.pure";
import { type DirectionalLight } from "../Lights/directionalLight.pure";
import { type SpotLight } from "../Lights/spotLight.pure";
import { type PointLight } from "../Lights/pointLight.pure";
import { type CubeTexture } from "../Materials/Textures/cubeTexture.pure";
import { type NullEngine } from "../Engines/nullEngine.pure";
import { type MultiMaterial } from "../Materials/multiMaterial.pure";
import { type OpenPBRMaterial } from "../Materials/PBR/openpbrMaterial.pure";
import { type PBRBaseMaterial } from "../Materials/PBR/pbrBaseMaterial.pure";
import { type PBRMaterial } from "../Materials/PBR/pbrMaterial.pure";
import { type StandardMaterial } from "../Materials/standardMaterial.pure";
import { type GreasedLineBaseMesh } from "../Meshes/GreasedLine/greasedLineBaseMesh";
import { type LinesMesh } from "../Meshes/linesMesh.pure";

/**
 * Checks whether an object is a NullEngine or a subclass of it, without loading NullEngine.
 * @param obj defines the object to check
 * @returns true if obj is a NullEngine
 */
export function IsNullEngine(obj: any): obj is NullEngine {
    return obj?._isNullEngine === true;
}

/**
 * Checks whether an object is a MultiMaterial or a subclass of it, without loading MultiMaterial.
 * @param obj defines the object to check
 * @returns true if obj is a MultiMaterial
 */
export function IsMultiMaterial(obj: any): obj is MultiMaterial {
    return obj?._isMultiMaterial === true;
}

/**
 * Checks whether an object is an OpenPBRMaterial or a subclass of it, without loading OpenPBRMaterial.
 * @param obj defines the object to check
 * @returns true if obj is an OpenPBRMaterial
 */
export function IsOpenPBRMaterial(obj: any): obj is OpenPBRMaterial {
    return obj?._isOpenPBRMaterial === true;
}

/**
 * Checks whether an object is a PBRBaseMaterial or a subclass of it (such as PBRMaterial), without loading PBRBaseMaterial.
 * @param obj defines the object to check
 * @returns true if obj is a PBRBaseMaterial
 */
export function IsPBRBaseMaterial(obj: any): obj is PBRBaseMaterial {
    return obj?._isPBRBaseMaterial === true;
}

/**
 * Checks whether an object is a PBRMaterial or a subclass of it, without loading PBRMaterial.
 * @param obj defines the object to check
 * @returns true if obj is a PBRMaterial
 */
export function IsPBRMaterial(obj: any): obj is PBRMaterial {
    return obj?._isPBRMaterial === true;
}

/**
 * Checks whether an object is a StandardMaterial or a subclass of it, without loading StandardMaterial.
 * @param obj defines the object to check
 * @returns true if obj is a StandardMaterial
 */
export function IsStandardMaterial(obj: any): obj is StandardMaterial {
    return obj?._isStandardMaterial === true;
}

/**
 * Checks whether an object is a GreasedLineBaseMesh or a subclass of it, without loading GreasedLineBaseMesh.
 * @param obj defines the object to check
 * @returns true if obj is a GreasedLineBaseMesh
 */
export function IsGreasedLineBaseMesh(obj: any): obj is GreasedLineBaseMesh {
    return obj?._isGreasedLineBaseMesh === true;
}

/**
 * Checks whether an object is a LinesMesh or a subclass of it, without loading LinesMesh.
 * @param obj defines the object to check
 * @returns true if obj is a LinesMesh
 */
export function IsLinesMesh(obj: any): obj is LinesMesh {
    return obj?._isLinesMesh === true;
}

/**
 * Checks whether an object is an ArcRotateCamera or a subclass of it, without loading ArcRotateCamera.
 * @param obj defines the object to check
 * @returns true if obj is an ArcRotateCamera
 */
export function IsArcRotateCamera(obj: any): obj is ArcRotateCamera {
    return obj?._isArcRotateCamera === true;
}

/**
 * Checks whether an object is a DirectionalLight or a subclass of it, without loading DirectionalLight.
 * @param obj defines the object to check
 * @returns true if obj is a DirectionalLight
 */
export function IsDirectionalLight(obj: any): obj is DirectionalLight {
    return obj?._isDirectionalLight === true;
}

/**
 * Checks whether an object is a SpotLight or a subclass of it, without loading SpotLight.
 * @param obj defines the object to check
 * @returns true if obj is a SpotLight
 */
export function IsSpotLight(obj: any): obj is SpotLight {
    return obj?._isSpotLight === true;
}

/**
 * Checks whether an object is a PointLight or a subclass of it, without loading PointLight.
 * @param obj defines the object to check
 * @returns true if obj is a PointLight
 */
export function IsPointLight(obj: any): obj is PointLight {
    return obj?._isPointLight === true;
}

/**
 * Checks whether an object is a CubeTexture or a subclass of it, without loading CubeTexture.
 * @param obj defines the object to check
 * @returns true if obj is a CubeTexture
 */
export function IsCubeTexture(obj: any): obj is CubeTexture {
    return obj?._isCubeTexture === true;
}
