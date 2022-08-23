document.getElementById('postBtn').addEventListener('click', function(){
    //console.log('post btn clicked');
    const inputField = document.getElementById('inputField');
    const inputText = inputField.value;
    // //console.log(inputText);
    // const newComment = document.getElementById('newComment');
    // newComment.innerText = inputText;

    const commentContainer = document.getElementById('commentContainer');
    const  p= document.createElement('p');
    p.innerText = inputText;
    commentContainer.appendChild(p);

    //clear area
    inputField.value = '';

});