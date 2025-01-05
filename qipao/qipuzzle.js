document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.pieces-container');
    const gridSize = 200;
    const totalPieces = 9;
    
    // Add grid background
    const grid = document.querySelector('.grid-overlay');
    grid.style.backgroundImage = 'url("images/grid.png")';
    grid.style.backgroundSize = 'contain';
    grid.style.backgroundRepeat = 'no-repeat';
    grid.style.backgroundPosition = 'center';

    // Choose random piece to place correctly
    const correctPieceIndex = Math.floor(Math.random() * totalPieces) + 1;
    
    // Create and position pieces
    for(let i = 1; i <= totalPieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.draggable = true;
        piece.style.backgroundImage = `url('images/qipuzzle ${i}.jpg')`;
        
        if (i === correctPieceIndex) {
            // Position one piece in correct grid position
            const row = Math.floor((i-1) / 3);
            const col = (i-1) % 3;
            piece.style.left = `${col * gridSize + (window.innerWidth/2 - 300)}px`;
            piece.style.top = `${row * gridSize}px`;
        } else {
            // Position other pieces on sides
            const isLeft = i % 2 === 0;
            const offset = Math.floor(i/2) * (gridSize + 20);
            piece.style.left = isLeft ? 
                `${window.innerWidth/2 - 500}px` : 
                `${window.innerWidth/2 + 300}px`;
            piece.style.top = `${offset}px`;
        }
        
        piece.addEventListener('dragstart', dragStart);
        piece.addEventListener('dragend', dragEnd);
        container.appendChild(piece);
    }

    function dragStart(e) {
        this.classList.add('dragging');
    }

    function dragEnd(e) {
        this.classList.remove('dragging');
        const rect = this.getBoundingClientRect();
        const x = Math.round(rect.left / gridSize) * gridSize;
        const y = Math.round(rect.top / gridSize) * gridSize;
        this.style.left = x + 'px';
        this.style.top = y + 'px';
    }
});
