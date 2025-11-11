document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.pieces-container');
    const gridWidth = 200;
    const gridHeight = 300;
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
            piece.style.left = `${col * gridWidth + (window.innerWidth/2 - 300)}px`;
            piece.style.top = `${row * gridHeight}px`;
        } else {
            // Position other pieces on sides
            const isLeft = i % 2 === 0;
            const offset = Math.floor(i/2) * (gridWidth + 20);
            piece.style.left = isLeft ? '-220px' : '620px';
            piece.style.top = `${offset}px`;
        }

        piece.onmousedown = function(event) {
            let shiftX = event.clientX - piece.getBoundingClientRect().left;
            let shiftY = event.clientY - piece.getBoundingClientRect().top;
        
            function moveAt (pageX, pageY) {
                piece.style.left = pageX - shiftX + 'px';
                piece.style.top = pageY - shiftY + 'px';
            }
            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }
            document.addEventListener ('mousemove', onMouseMove);

            piece.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                piece.onmouseup = null;
            };
        };

        piece.ondragstart = function() {
            return false;
          };
    };
