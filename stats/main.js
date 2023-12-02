// Navbar
	function loadNavbar() {
		const navbarPlaceholder = document.getElementById('navbar-placeholder');
		if (!navbarPlaceholder) return;  // Exit if placeholder not found

		const xhr = new XMLHttpRequest();

		// Determine the correct path to navbar.html based on the current URL
		let navbarPath = 'navbar.html'; // Default path for stat page
		if (window.location.pathname.includes('/stats/archive/') || window.location.pathname.includes('/stats/events/')) {
			navbarPath = '../navbar.html'; // Path for pages in archive and events directories
		}

		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				navbarPlaceholder.innerHTML = this.responseText;
			}
		};

		xhr.open('GET', navbarPath, true);
		xhr.send();
	}

  window.onload = loadNavbar;

// Timer
    // Set the date and time for the countdown to end (e.g., "October 30, 2023 15:00:00")
    var countDownDate = new Date("January 7, 2024 15:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        // Time calculations
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is finished, display some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Update is now due! Please wait";
        }
    }, 1000);

// Styling
//	function styleChatUsers() {
//		var mods = ["akiba212", "anglegabriel__", "fossabot", "livytaskbot", "nightbot", "osfrog", "Phantomspower", "playwithviewersbot", "songlistbot", "streamelements", "streamlabs", "willzystreams"];
//		var vips = ["maicomolo", "beholdbrooke", "lowlifeprincessx", "sammziee", "knight1y", "rd07x__", "officiallysp", "sirjester2", "minoarno", "tjorbjorn", "aribearree", "mikey98123"];
//		var chatUsers = document.getElementsByClassName("chat-user");
//		for(var i = 0; i < chatUsers.length; i++) {
//			var username = chatUsers[i].textContent.split(":")[0].trim();
//			if(mods.includes(username)) {
//				chatUsers[i].style.fontWeight = "bold";
//			}
//			if(vips.includes(username)) {
//				chatUsers[i].style.fontStyle = "italic";
//			}
//		}
//	}
//