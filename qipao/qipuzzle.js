document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.pieces-container');
    const gridSize = 200;

    // Create puzzle pieces
    for(let i = 1; i <= 9; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.draggable = true;
        piece.style.backgroundImage = `url('images/qipuzzle {i}.jpg')`;
        
        // Random initial position
        piece.style.left = Math.random() * 400 + 'px';
        piece.style.top = Math.random() * 400 + 'px';
        
        piece.addEventListener('dragstart', dragStart);
        piece.addEventListener('dragend', dragEnd);
        container.appendChild(piece);
    }

    function dragStart(e) {
        this.classList.add('dragging');
    }

    function dragEnd(e) {
        this.classList.remove('dragging');
        // Calculate nearest grid position
        const rect = this.getBoundingClientRect();
        const x = Math.round(rect.left / gridSize) * gridSize;
        const y = Math.round(rect.top / gridSize) * gridSize;
        
        // Snap to grid
        this.style.left = x + 'px';
        this.style.top = y + 'px';
    }
});
