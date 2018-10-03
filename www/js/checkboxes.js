$(document).ready(function clickedy() {
    if (event.target.tagName !== 'INPUT'){ document.getElementById('check' + this.id).checked = !document.getElementById('check' + this.id).checked};
    if ( document.getElementById('back' + this.id).classList.contains('bg-light') ) {
        document.getElementById('back' + this.id).classList.remove('bg-light');
        document.getElementById('back' + this.id).classList.add('bg-success');
    } else {
        document.getElementById('back' + this.id).classList.remove('bg-success');
        document.getElementById('back' + this.id).classList.add('bg-light');
    }
});