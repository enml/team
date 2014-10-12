app.templates = (function () {
    function showPhotoAside() {
        return '<div id = "drop-area" ><span class = "drop-instructions" > 将文件拖拽到这里 </span> <span class="drop-over">Drop files here!</span ></div><div class = "input" ><a class = "fa fa-folder-open-o" href = "" > 上传 </a><input id="files-upload" type="file" multiple accept="*.*" name="file"></div ><ul id="file-list"><header>已添加文件：</header ></ul>'
    };
    
    function showPhotoDetail(){
        return ' <canvas id="canvas" width="700" height="500">您的浏览器不支持canvas</canvas><div id="filterBtnList"><button data-name="grayColor" id="gray">灰白</button><button data-name="invertColor" id="invert">反色</button><button data-name="adjustColor" id="adjust">复古</button><button data-name="blurImage" id="blur">虚化</button><button data-name="reliefImage" id="relief">浮雕</button><button data-name="kediaoImage" id="kediao">刻雕</button><button data-name="mirrorImage" id="mirror">反转</button><button data-name="resetImage" id="reset">复原</button></div>'
    };
    
    function showTodoAside(){
        
    };
    
    function showTodoDetail(){
        
    };
    
    function showDocumentAside(){
        
    };
    
    function showDocumentDetail(){
        
    };
    
return{
    showPhotoAside:showPhotoAside,
    showPhotoDetail:showPhotoDetail,
    showTodoAside:showTodoAside,
    showTodoDetail:showTodoDetail,
    showDocumentAside:showDocumentAside,
    showDocumentDetail:showDocumentDetail
}
})();