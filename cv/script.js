function toggleSkills(listId) {
            var skillsList = document.getElementById(listId);
            skillsList.style.display = (skillsList.style.display === 'none' || skillsList.style.display === '') ? 'block' : 'none';
}

       function toggleDetails(detailsId) {
            var jobDetails = document.getElementById(detailsId);
            jobDetails.style.display = (jobDetails.style.display === 'none' || jobDetails.style.display === '') ? 'block' : 'none';
        }
