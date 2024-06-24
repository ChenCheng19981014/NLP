
import type RunScene from "run-scene-v2/types/src/RunScene";
import Three from "run-scene-core";
import { Bus } from "run-scene-v2/types/src/Libs/Bus";
import Engine from 'run-scene-v2'
class Base {
    runScene: RunScene
    getModel: RunScene["modelEx"]["getModel"]
    scene: Three.Scene;
    camera: Three.PerspectiveCamera;
    renderer: Three.WebGLRenderer;
    controls: Three.OrbitControls;
    engineDom: HTMLElement;
    render2: Three.CSS3DRenderer;
    render3: Three.CSS3DRenderer;
    parentDom: HTMLElement;
    constructor(runScene: RunScene) {
        this.runScene = runScene
        this.getModel = runScene.modelEx.getModel.bind(runScene.modelEx)
        const assets = runScene.assetsEx.get()
        this.scene = assets.scene
        this.camera = assets.camera
        this.renderer = assets.renderer
        this.controls = assets.controls
        this.engineDom = assets.engineDom
        this.render2 = assets.render2
        this.render3 = assets.render3
        this.parentDom = assets.parentDom
    }
}
export abstract class BaseModule<T extends BaseModuleCore> extends Base {
    mounted?() : void

    bus: Bus
    modules: T['modules']
    core:T
    constructor(core:T) {
        super(core.runScene)
        this.bus = core.bus
        this.core  = core
        this.modules = core.modules
        this.mounted?.()
    }
}
export abstract class BaseModuleCore  extends Base{
    mounted?() : this
  
    bus: Bus
    constant: {
        [key: string]: string
    }
    modules?:any
    abstract beforeModuleMounted(): void
    constructor(map: {
        runScene: RunScene,
        inputData?: {
            [key: string]: any
        }
    }) {
        const { runScene, inputData } = map
        super(runScene)
        this.bus = new Engine.Bus()
        this.constant = (inputData || {})
        this.beforeModuleMounted()
    }


    // addModule(Module: BaseModule<BaseModuleCore>) {
    //     const ins = new (Module as any)({
    //         runScene:this.runScene,
    //         bus:this.bus,
    //     });
    //     if (!ins.name) throw TypeError("代码出错");
    //     this.runScene.custom[ins.name] = ins;
    //     ins?.mounted?.()
    // }

}
export type Modules = {
    get: (map: {
        runScene: RunScene,
        getModel: RunScene["modelEx"]["getModel"],
        modules: {
            [key: string]: BaseModule<BaseModuleCore>[]
        },
        constant: {
            [key: string]: string
        },
        window: null,
        bus: Bus,
        scene: Three.Scene;
        camera: Three.PerspectiveCamera;
        renderer: Three.WebGLRenderer;
        controls: Three.OrbitControls;
        engineDom: HTMLElement;
        render2: Three.CSS3DRenderer;
        render3: Three.CSS3DRenderer;
        parentDom: HTMLElement;
    }) => BaseModule<BaseModuleCore>[]
}



