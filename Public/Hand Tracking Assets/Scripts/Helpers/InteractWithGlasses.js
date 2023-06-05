// -----JS CODE-----
//@input Component.ScriptComponent getPositionScript
//@input SceneObject[] glasses

function initialize() {
    script.createEvent("UpdateEvent").bind(onUpdate);
}
initialize();

function onUpdate() {
    var pos_index = script.getPositionScript.api.getPosition();
    var pos_glasses;
    
    for(var i = 0; i < script.glasses.length-1; i++) {
        pos_glasses = script.glasses[i].getTransform().getWorldPosition();
        pos_index.distance(pos_glasses);
    }
    
}
