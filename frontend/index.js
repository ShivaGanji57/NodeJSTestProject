const form=document.getElementById('addData')
const search=document.getElementById('search')

form.addEventListener('submit',showData)
search.addEventListener('click',showUseronScreen)
function showData(e){
    e.preventDefault();
    let playerData={
        name:document.getElementById('name').value,
        dob:document.getElementById('DOB').value,
        image:document.getElementById('imageURL').value,
        place:document.getElementById('birthplace').value,
        career:document.getElementById('career').value,
        matches:document.getElementById('matches').value,
        fifty:document.getElementById('fifties').value,
        century:document.getElementById('century').value,
        wickets:document.getElementById('wickets').value,
        average:document.getElementById('average').value,
        id:document.getElementById('userId').value
    }
    form.reset()
    axios.post("http://localhost:3000/cricket",playerData)
    .then(result=>{

    })
    .catch(err=>console.log(err))
}

function showUseronScreen(){
    form.style.display='none'
    const parentElem=document.getElementById('list-items')
    const player=document.getElementById('player').value
    axios.get(`http://localhost:3000/cricket/${player}`)
    .then(result=>{
        const res=result.data[0]
        var name=document.createElement('li')
        name.textContent='Player name : '+res.name
        var image=document.createElement('img')
        image.src=result.data[0].image
        var dob=document.createElement('li')
        dob.textContent="Date of birth :"+res.DOB
        var place =document.createElement('li')
        place.textContent="Place of birth "+res.place
        var career=document.createElement('li')
        career.textContent=res.career
        var matches=document.createElement('li')
        matches.textContent="Number of matches played "+res.matches
        var fifty=document.createElement('li')
        fifty.textContent="Number of fifties  "+res.fifties
        var century=document.createElement('li')
        century.textContent="Number ofCenturies "+res.centuries
        var wickets=document.createElement('li')
        wickets.textContent="Number of wickets "+res.wickets
        var avg=document.createElement('li')
        avg.textContent="Average is "+res.average
        var editbtn=document.createElement('input')
        editbtn.type='button'
        editbtn.value='edit-Player'
        editbtn.onclick=() =>{
            form.style.display='block'
            parentElem.removeChild(name)
            parentElem.removeChild(image)
            parentElem.removeChild(dob)
            parentElem.removeChild(place)
            parentElem.removeChild(career)
            parentElem.removeChild(matches)
            parentElem.removeChild(fifty)
            parentElem.removeChild(century)
            parentElem.removeChild(avg)
            document.getElementById('name').value=res.name,
            document.getElementById('DOB').value=res.DOB,
            document.getElementById('imageURL').value=res.image,
            document.getElementById('birthplace').value=res.place,
            document.getElementById('career').value=res.career,
            document.getElementById('matches').value=res.matches,
            document.getElementById('fifties').value=res.fifties,
            document.getElementById('century').value=res.centuries,
            document.getElementById('wickets').value=res.wickets,
            document.getElementById('average').value=res.average,
            document.getElementById('userId').value=res.id
            axios.
            delete(`http://localhost:3000/cricket/${res.id}`).
            then(result=>console.log(result)).
            catch(err=>console.log(err))
        }
        parentElem.appendChild(name)
        parentElem.appendChild(image)
        parentElem.appendChild(dob)
        parentElem.appendChild(place)
        parentElem.appendChild(career)
        parentElem.appendChild(matches)
        parentElem.appendChild(fifty)
        parentElem.appendChild(century)
        parentElem.appendChild(avg)
        parentElem.appendChild(editbtn)
    })
    .catch(err=>console.log(err))
    
}