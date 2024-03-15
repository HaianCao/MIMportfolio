function changeSpecialization(specialization){
    let all = document.getElementsByClassName('specialization-each');
    for(let i = 0; i < all.length; i++){
        all[i].style.display = 'none';
    }
    document.getElementsByClassName(specialization)[0].style.display = 'block';
}

function changeSpecializationMobile(specialization){
    let now = document.getElementsByClassName(specialization)[0];
    let all = document.getElementsByClassName('specialization-each');
    for(let i = 0; i < all.length; i++){
        if (all[i] == now){
            continue;
        }
        all[i].style.display = 'none';
    }

    if(window.getComputedStyle(now).display == "none"){
        now.style.display = "block";
    } else {
        now.style.display = "none";
    }
}