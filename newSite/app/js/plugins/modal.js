function _createModal(options) {
    const modal = document.createElement('div');

    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin',`>
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Модальный заголовок</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam perferendis magnam, consectetur animi iure assumenda ducimus odit cumque. Doloremque repudiandae eum reprehenderit incidunt quasi quia, velit excepturi aliquam possimus.</p>
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>		
    </div>
`);
    document.body.appendChild(modal);
    return modal;
}

$.modal = function(options) {
   const $modal = _createModal(options);
    
    return {
        open() {
            $modal.classList.add('open');
        },
        close() {
            $modal.classList.remove('open');
        },
        destroy() {}
    }
}