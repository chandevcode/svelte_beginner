export function mySlide(node){
    let x;
    let y;

    function handleMouseDown(event){
        if (event.type.startsWith("touch")){

            x = event.touches[0].pageX;
            y = event.touches[0].pageY;
        }else {
            x = event.clientX;
            y = event.clientY;
        }
        const dx = clientX - x;
        const dy = clientY - y;

        x = clientX;
        y = clientY;

        node.dispatchEvent(new CustomEvent('slidemove',{
            detail: { x, y , dx, dy},
        }));
    } 
     function handelMouseUp(event){
        x=0;
        y=0;

        node.dispatchEvent(new CustomEvent('slideend',{
            detail: { x, y },
     }));
     window.removeEventListener('mousemove', handleMousemove);
     window.removeEventListener("touchmove", handleMousemove);
     window.removeEventListener('mouseup', handleMouseup);
     window.removeEventListener("touchend", handleMouseup);
    };
    node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('touchstart', handleMousedown);

    return {
        destroy (){
            node.removeEventListener('mousedown', handleMousedown);
        }
    }
}