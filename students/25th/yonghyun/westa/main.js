function addMessage() {
    const makeP = document.createElement('p');
    const message = document.getElementById('writeComment').value;
    const firstP = '<a href="" class="re_id">wecode_bootcamp</a><span class="re_p">';
    const lastP = '</span><span class="deletespan"><button class="deleteBtn"><i class="fas fa-ellipsis-h"></i></button></span><span><button class="re_heart"><i class="far fa-heart"></i></button></span>'

    makeP.innerHTML = `${firstP}${message}${lastP}`;
    document.getElementById('other_re').appendChild(makeP);
}