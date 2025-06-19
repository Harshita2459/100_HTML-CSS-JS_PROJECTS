const searchInput= document.getElementById('searchInput');
const searchBtn= document.getElementById('searchBtn');
const profileContainer= document.getElementById('profileContainer');

searchBtn.addEventListener('click', async ()=>{
    const username=searchInput.value.trim();
    if(username===''){
        alert("Enter the username:");
        return;
    }

    const url= `https://api.github.com/users/${username}`;
    try{
        const response= await fetch(url);
        console.log(response);
        if(!response.ok){
            throw new Error('User not found!');
        }
        const data= await response.json();
        displayProfile(data);
    }
    catch(error){
        profileContainer.innerHTML= `<p style:"color:red";>${error.message}</p>`
        profileContainer.classList.remove("hidden");
    }
});

function displayProfile(user){
    profileContainer.innerHTML=`
     <div class="profile-card">
            <img src="${user.avatar_url}" alt="${user.login}" />
            <h2>${user.name || user.login}</h2>
            <p><strong>Username:</strong> ${user.login}</p>
            <p><strong>Bio:</strong> ${user.bio || 'No bio available'}</p>
            <p><strong>Location:</strong> ${user.location || 'Not specified'}</p>
            <p><strong>Public Repos:</strong> ${user.public_repos}</p>
            <p><strong>Followers:</strong> ${user.followers}</p>
            <p><strong>Following:</strong> ${user.following}</p>
            <a href="${user.html_url}" target="_blank">View on GitHub</a>
        </div>
    `;
    profileContainer.classList.remove('hidden');
}