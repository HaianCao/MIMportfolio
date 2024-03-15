function changeSpecialization(specialization){
    let all = document.getElementsByClassName('specialization-each');
    for(let i = 0; i < all.length; i++){
        all[i].style.display = 'none';
    }
    document.getElementsByClassName(specialization)[0].style.display = 'block';
}