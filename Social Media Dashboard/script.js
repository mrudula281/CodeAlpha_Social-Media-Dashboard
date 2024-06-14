const feeds = {
    twitter: [
        { user: "User1", content: "This is a tweet from User1" },
        { user: "User2", content: "This is another tweet from User2" }
    ],
    facebook: [
        { user: "UserA", content: "This is a Facebook post from UserA" },
        { user: "UserB", content: "This is another Facebook post from UserB" }
    ],
    instagram: [
        { user: "UserX", content: "This is an Instagram post from UserX" },
        { user: "UserY", content: "This is another Instagram post from UserY" }
    ],
    linkedin: [
        { user: "UserM", content: "This is a LinkedIn post from UserM" },
        { user: "UserN", content: "This is another LinkedIn post from UserN" }
    ]
};

function connectAccount(platform) {
    showModal(`Connecting to ${platform}. Please authenticate.`);
    document.getElementById('auth-confirm-button').onclick = () => {
        closeModal();
        loadFeeds(platform);
    };
}

function loadFeeds(platform) {
    const feedsContainer = document.getElementById('feeds');
    feedsContainer.innerHTML = ''; // Clear previous feeds

    const platformFeeds = feeds[platform];
    if (platformFeeds) {
        platformFeeds.forEach(feed => {
            const feedElement = document.createElement('div');
            feedElement.className = 'feed';
            feedElement.innerHTML = `<h2>${feed.user}</h2><p>${feed.content}</p>`;
            feedsContainer.appendChild(feedElement);
        });
    } else {
        feedsContainer.innerHTML = '<p>No feeds available.</p>';
    }
}

function showModal(message) {
    const modal = document.getElementById('auth-modal');
    document.getElementById('auth-message').innerText = message;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('auth-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('auth-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};