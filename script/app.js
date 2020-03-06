(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
	gameBoard = document.querySelector('.puzzle-board'),
	dropZones = document.querySelectorAll('.drop-zone'),
	dropPuzzle = document.querySelectorAll('.puzzle-pieces img'),

	puzzleFirstContainer = document.querySelector('.puzzle-pieces');



const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

function changeImageSet() {

pieceNames.forEach((piece, index) =>{
	dropPuzzle[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
	dropPuzzle[index].id = `${piece + this.dataset.puzzleref}`;
}); 
gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
 //debugger;
}

function reset(){
	for (let i=0; i < dropZones.length; i++){
		if(dropZones[i].childNodes.length != 0)
		puzzleFirstContainer.appendChild(dropZones[i].firstChild);
	}
}





//allow to drag Puzzlepieces//
function allowDrag(event) {
	console.log ('started dragging an image');


event.dataTransfer.setData("text/plain", this.id);
}

//allow drag over the a drop zone//
function allowDragOver(event) {
	event.preventDefault();
	console.log ('dragged over a drop zone');
}
//allow drop into exect drop zone//
function allowDrop(event) {

 
 let currentImage = event.dataTransfer.getData("text/plain");

 if (this.childNodes.length === 0){
 	console.log('haha');
 	this.appendChild(document.querySelector(`#${currentImage}`));
 }
 else if (this.childNodes.length > 0){
 	let oldImage = this.firstChild;
 	this.appendChild(document.querySelector(`#${currentImage}`));

 	puzzleFirstContainer.appendChild(oldImage);
 }




 }



function removeChild(){

}




puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));
puzzleButtons.forEach(button => button.addEventListener('click', reset));

dropPuzzle.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {

 zone.addEventListener('dragover', allowDragOver);
zone.addEventListener('drop', allowDrop);

});

changeImageSet.call(puzzleButtons[0]);

})();
