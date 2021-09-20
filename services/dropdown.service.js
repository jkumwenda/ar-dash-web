export const filter=()=>{
    console.log('GOT HERE')
    const dropdown = document.querySelector('#filterSearch')
    dropdown.classList.toggle('hidden')
    dropdown.classList.toggle('origin-top-right')
}

export const filterClose=()=>{
    const dropdown = document.querySelector('#filterSearch')
    dropdown.classList.toggle('hidden')
}

export const gridOption=()=>{
    const dropdown = document.querySelector('#' + gridData)
    dropdown.classList.toggle('hidden')
    dropdown.classList.toggle('origin-top-right')
}    