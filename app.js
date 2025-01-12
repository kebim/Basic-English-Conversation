document.addEventListener("DOMContentLoaded", function() {
    // Get all conversation headers (the categories like school, office, etc.)
    const conversationHeaders = document.querySelectorAll('.conversation-header');
    
    conversationHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const target = this.getAttribute('data-target'); // Get target section id
            const section = document.getElementById(target);

            // Toggle the display of the corresponding section
            if (section.style.display === 'none' || section.style.display === '') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
