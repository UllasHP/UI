
    // JavaScript logic should be included here
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    function handleMouseDown(event) {
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
    }

    function handleMouseUp() {
      isDragging = false;
    }

    function handleMouseMove(event) {
      if (isDragging) {
        const delta = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y
        };

        const rotationX = delta.y;
        const rotationY = delta.x;

        const beam = document.querySelector('.beam');
        beam.style.transform += `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        previousMousePosition = {
          x: event.clientX,
          y: event.clientY
        };
      }
    }
