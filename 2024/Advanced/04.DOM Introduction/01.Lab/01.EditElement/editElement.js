function editElement(){
    const ref = document.getElementById('e1')
    const match = '%insert name here%'
    const replacer = 'Document Object Model'
    edit(ref, match, replacer)
}
function edit(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer)
    ref.textContent = edited;
}