 function getQueryVariable(variable)
    {
           var query = window.location.search.substring(1)
           var vars = query.split("&")
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=")
                   if(pair[0] == variable) {return pair[1]}
           }
           return(NaN);
    }

    function setBarValue(name, value) {
        innerel = document.getElementById(name)
        outerel = document.getElementById("bar-" + name)
        outerel.style.width = (value + "%")
        innerel.innerHTML = (value + "%")
        if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
            innerel.style.visibility = "hidden"
        }
    }

    aArray = ["Sparky","Assertive","Active","Moderate","Indifferent","Passive","Asleep"]
    eArray = ["Hyperthymic","Enthusiastic","Lively","Balanced","Quiet","Reluctant","Disthymic"]
    cArray = ["Bleeding-Heart","Empathetic","Sympathetic","Balanced","Unfeeling","Cruel","Barbaric"]
    pArray = ["Pacifist","Diplomatic","Civil","Neutral","Rough","Rude","Enemy"]
	iArray = ["Worker Ant","Industrious","Concentrated","Neutral","Idle","Laid-Back","Slacker"]
	oArray = ["Order Freak","Formal","Orderly","Balanced","Unpredictable","Chaotic","Entropic"]
	wArray = ["Cowardly","Distressed","Anxious","Situational","Content","Brave","Fearless"]
	vArray = ["Destructive","Volatile","Unstable","Situational","Stable","Calm","Tranquil"]
	nArray = ["Brainiac","Intellectual","Curious","Balanced","Practical","Unsophisticated","Small-Minded"]
	xArray = ["Otherworldly","Creative","Open-Minded","Balanced","Traditional","Intolerant","Fundamentalist"]

    function setLabel(val,ary) {
        if (val > 100) { return "" } else
        if (val > 90) { return ary[0] } else
        if (val > 75) { return ary[1] } else
        if (val > 60) { return ary[2] } else
        if (val >= 40) { return ary[3] } else
        if (val >= 25) { return ary[4] } else
        if (val >= 10) { return ary[5] } else
        if (val >= 0) { return ary[6] } else
        	{return ""}
    }

    assertive  = getQueryVariable("a")
    enthusiastic     = getQueryVariable("e")
    compassionate   = getQueryVariable("c")
    polite  = getQueryVariable("p")
	industrious  = getQueryVariable("s")
    orderly     = getQueryVariable("o")
    withdrawn   = getQueryVariable("w")
    volatile  = getQueryVariable("v")
	intellectual   = getQueryVariable("n")
    open  = getQueryVariable("x")
    passive    = (100 - assertive).toFixed(1)
    quiet     = (100 - enthusiastic).toFixed(1)
    cruel = (100 - compassionate).toFixed(1)
    vulgar = (100 - polite).toFixed(1)
	laidback = (100 - industrious).toFixed(1)
	chaotic = (100 - orderly).toFixed(1)
	bold = (100 - withdrawn).toFixed(1)
	stable = (100 - volatile).toFixed(1)
	ignorant = (100 - intellectual).toFixed(1)
	close = (100 - open).toFixed(1)

    setBarValue("assertive", assertive)
    setBarValue("passive", passive)
    setBarValue("enthusiastic", enthusiastic)
    setBarValue("quiet", quiet)
    setBarValue("compassionate", compassionate)
    setBarValue("cruel", cruel)
    setBarValue("polite", polite)
    setBarValue("vulgar", vulgar)
	setBarValue("industrious", industrious)
    setBarValue("laidback", laidback)
	setBarValue("orderly", orderly)
    setBarValue("chaotic", chaotic)
	setBarValue("withdrawn", withdrawn)
    setBarValue("bold", bold)
	setBarValue("volatile", volatile)
    setBarValue("stable", stable)
	setBarValue("intellectual", intellectual)
    setBarValue("ignorant", ignorant)
	setBarValue("open", open)
    setBarValue("closed", close)

    document.getElementById("a-label").innerHTML = setLabel(assertive, aArray)
    document.getElementById("e-label").innerHTML = setLabel(enthusiastic, eArray)
    document.getElementById("c-label").innerHTML = setLabel(compassionate, cArray)
    document.getElementById("p-label").innerHTML = setLabel(polite, pArray)
	document.getElementById("s-label").innerHTML = setLabel(industrious, iArray)
	document.getElementById("o-label").innerHTML = setLabel(orderly, oArray)
	document.getElementById("w-label").innerHTML = setLabel(withdrawn, wArray)
	document.getElementById("v-label").innerHTML = setLabel(volatile, vArray)
	document.getElementById("n-label").innerHTML = setLabel(intellectual, nArray)
	document.getElementById("x-label").innerHTML = setLabel(open, xArray)

    ideology = ""
    ideodist = Infinity
    for (var i = 0; i < ideologies.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(ideologies[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(ideologies[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(ideologies[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(ideologies[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(ideologies[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(ideologies[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(ideologies[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(ideologies[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(ideologies[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(ideologies[i].stats.x - open), 2)
        if (dist < ideodist) {
            ideology = ideologies[i].name
            ideodist = dist
        }
    }
    document.getElementById("ideology-label").innerHTML = ideology
	
	level = ""
    leveldist = Infinity
    for (var i = 0; i < levels.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(levels[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(levels[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(levels[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(levels[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(levels[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(levels[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(levels[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(levels[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(levels[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(levels[i].stats.x - open), 2)
        if (dist < leveldist) {
            level = levels[i].name
            leveldist = dist
        }
    }
    document.getElementById("level-label").innerHTML = level
	
	mbti = ""
    mbtidist = Infinity
    for (var i = 0; i < mbtitypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(mbtitypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(mbtitypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(mbtitypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(mbtitypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(mbtitypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(mbtitypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(mbtitypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(mbtitypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(mbtitypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(mbtitypes[i].stats.x - open), 2)
        if (dist < mbtidist) {
            mbti = mbtitypes[i].name
            mbtidist = dist
        }
    }
    document.getElementById("mbti-label").innerHTML = mbti
	
	enneagram = ""
    enneagramdist = Infinity
    for (var i = 0; i < enneagramtypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(enneagramtypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(enneagramtypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(enneagramtypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(enneagramtypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(enneagramtypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(enneagramtypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(enneagramtypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(enneagramtypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(enneagramtypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(enneagramtypes[i].stats.x - open), 2)
        if (dist < enneagramdist) {
            enneagram = enneagramtypes[i].name
            enneagramdist = dist
        }
    }
    document.getElementById("enneagram-label").innerHTML = enneagram
	
	hogwarts = ""
    hogwartsdist = Infinity
    for (var i = 0; i < hogwartshouses.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(hogwartshouses[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(hogwartshouses[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(hogwartshouses[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(hogwartshouses[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(hogwartshouses[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(hogwartshouses[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(hogwartshouses[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(hogwartshouses[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(hogwartshouses[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(hogwartshouses[i].stats.x - open), 2)
        if (dist < hogwartsdist) {
            hogwarts = hogwartshouses[i].name
            hogwartsdist = dist
        }
    }
    document.getElementById("hogwarts-label").innerHTML = hogwarts
	
	ilvermorny = ""
    ilvermornydist = Infinity
    for (var i = 0; i < ilvermornyhouses.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(ilvermornyhouses[i].stats.x - open), 2)
        if (dist < ilvermornydist) {
            ilvermorny = ilvermornyhouses[i].name
            ilvermornydist = dist
        }
    }
    document.getElementById("ilvermorny-label").innerHTML = ilvermorny
	
	zodiac = ""
    zodiacdist = Infinity
    for (var i = 0; i < zodiacsigns.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(zodiacsigns[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(zodiacsigns[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(zodiacsigns[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(zodiacsigns[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(zodiacsigns[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(zodiacsigns[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(zodiacsigns[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(zodiacsigns[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(zodiacsigns[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(zodiacsigns[i].stats.x - open), 2)
        if (dist < zodiacdist) {
            zodiac = zodiacsigns[i].name
            zodiacdist = dist
        }
    }
    document.getElementById("zodiac-label").innerHTML = zodiac
	
	archetype = ""
    archetypedist = Infinity
    for (var i = 0; i < archetypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(archetypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(archetypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(archetypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(archetypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(archetypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(archetypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(archetypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(archetypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(archetypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(archetypes[i].stats.x - open), 2)
        if (dist < archetypedist) {
            archetype = archetypes[i].name
            archetypedist = dist
        }
    }
    document.getElementById("archetype-label").innerHTML = archetype
	
	epigenotype = ""
    epigenotypedist = Infinity
    for (var i = 0; i < epigenotypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(epigenotypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(epigenotypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(epigenotypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(epigenotypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(epigenotypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(epigenotypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(epigenotypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(epigenotypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(epigenotypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(epigenotypes[i].stats.x - open), 2)
        if (dist < epigenotypedist) {
            epigenotype = epigenotypes[i].name
            epigenotypedist = dist
        }
    }
    document.getElementById("epigenotype-label").innerHTML = epigenotype
	
	bloodtype = ""
    bloodtypedist = Infinity
    for (var i = 0; i < bloodtypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(bloodtypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(bloodtypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(bloodtypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(bloodtypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(bloodtypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(bloodtypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(bloodtypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(bloodtypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(bloodtypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(bloodtypes[i].stats.x - open), 2)
        if (dist < bloodtypedist) {
            bloodtype = bloodtypes[i].name
            bloodtypedist = dist
        }
    }
    document.getElementById("bloodtype-label").innerHTML = bloodtype
	
	pokemontype = ""
    pokemontypedist = Infinity
    for (var i = 0; i < pokemontypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(pokemontypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(pokemontypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(pokemontypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(pokemontypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(pokemontypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(pokemontypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(pokemontypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(pokemontypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(pokemontypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(pokemontypes[i].stats.x - open), 2)
        if (dist < pokemontypedist) {
            pokemontype = pokemontypes[i].name
            pokemontypedist = dist
        }
    }
    document.getElementById("pokemontype-label").innerHTML = pokemontype
	
	fragrance = ""
    fragrancedist = Infinity
    for (var i = 0; i < fragrances.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(fragrances[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(fragrances[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(fragrances[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(fragrances[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(fragrances[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(fragrances[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(fragrances[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(fragrances[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(fragrances[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(fragrances[i].stats.x - open), 2)
        if (dist < fragrancedist) {
            fragrance = fragrances[i].name
            fragrancedist = dist
        }
    }
    document.getElementById("fragrance-label").innerHTML = fragrance
	
	youtuber = ""
    youtuberdist = Infinity
    for (var i = 0; i < youtubers.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(youtubers[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(youtubers[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(youtubers[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(youtubers[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(youtubers[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(youtubers[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(youtubers[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(youtubers[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(youtubers[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(youtubers[i].stats.x - open), 2)
        if (dist < youtuberdist) {
            youtuber = youtubers[i].name
            youtuberdist = dist
        }
    }
    document.getElementById("youtuber-label").innerHTML = youtuber
	
	tvcharacter = ""
    tvcharacterdist = Infinity
    for (var i = 0; i < tvcharacters.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(tvcharacters[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(tvcharacters[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(tvcharacters[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(tvcharacters[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(tvcharacters[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(tvcharacters[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(tvcharacters[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(tvcharacters[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(tvcharacters[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(tvcharacters[i].stats.x - open), 2)
        if (dist < tvcharacterdist) {
            tvcharacter = tvcharacters[i].name
            tvcharacterdist = dist
        }
    }
    document.getElementById("tvcharacter-label").innerHTML = tvcharacter
	
	somatotype = ""
    somatotypedist = Infinity
    for (var i = 0; i < somatotypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(somatotypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(somatotypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(somatotypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(somatotypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(somatotypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(somatotypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(somatotypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(somatotypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(somatotypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(somatotypes[i].stats.x - open), 2)
        if (dist < somatotypedist) {
            somatotype = somatotypes[i].name
            somatotypedist = dist
        }
    }
    document.getElementById("somatotype-label").innerHTML = somatotype
	
	temperament = ""
    temperamentdist = Infinity
    for (var i = 0; i < temperaments.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(temperaments[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(temperaments[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(temperaments[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(temperaments[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(temperaments[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(temperaments[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(temperaments[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(temperaments[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(temperaments[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(temperaments[i].stats.x - open), 2)
        if (dist < temperamentdist) {
            temperament = temperaments[i].name
            temperamentdist = dist
        }
    }
    document.getElementById("temperament-label").innerHTML = temperament
	
	disctype = ""
    disctypedist = Infinity
    for (var i = 0; i < disctypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(disctypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(disctypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(disctypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(disctypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(disctypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(disctypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(disctypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(disctypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(disctypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(disctypes[i].stats.x - open), 2)
        if (dist < disctypedist) {
            disctype = disctypes[i].name
            disctypedist = dist
        }
    }
    document.getElementById("disctype-label").innerHTML = disctype
	
	keirsey = ""
    keirseydist = Infinity
    for (var i = 0; i < keirseys.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(keirseys[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(keirseys[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(keirseys[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(keirseys[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(keirseys[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(keirseys[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(keirseys[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(keirseys[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(keirseys[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(keirseys[i].stats.x - open), 2)
        if (dist < keirseydist) {
            keirsey = keirseys[i].name
            keirseydist = dist
        }
    }
    document.getElementById("keirsey-label").innerHTML = keirsey
	
	alignment = ""
    alignmentdist = Infinity
    for (var i = 0; i < alignments.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(alignments[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(alignments[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(alignments[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(alignments[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(alignments[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(alignments[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(alignments[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(alignments[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(alignments[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(alignments[i].stats.x - open), 2)
        if (dist < alignmentdist) {
            alignment = alignments[i].name
            alignmentdist = dist
        }
    }
    document.getElementById("alignment-label").innerHTML = alignment
	
	ipipneo = ""
    ipipneodist = Infinity
    for (var i = 0; i < ipipneos.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(ipipneos[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(ipipneos[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(ipipneos[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(ipipneos[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(ipipneos[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(ipipneos[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(ipipneos[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(ipipneos[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(ipipneos[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(ipipneos[i].stats.x - open), 2)
        if (dist < ipipneodist) {
            ipipneo = ipipneos[i].name
            ipipneodist = dist
        }
    }
    document.getElementById("ipipneo-label").innerHTML = ipipneo

	animal = ""
    animaldist = Infinity
    for (var i = 0; i < animals.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(animals[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(animals[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(animals[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(animals[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(animals[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(animals[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(animals[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(animals[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(animals[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(animals[i].stats.x - open), 2)
        if (dist < animaldist) {
            animal = animals[i].name
            animaldist = dist
        }
    }
    document.getElementById("animal-label").innerHTML = animal
	
	mythical = ""
    mythicaldist = Infinity
    for (var i = 0; i < mythicals.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(mythicals[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(mythicals[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(mythicals[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(mythicals[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(mythicals[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(mythicals[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(mythicals[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(mythicals[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(mythicals[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(mythicals[i].stats.x - open), 2)
        if (dist < mythicaldist) {
            mythical = mythicals[i].name
            mythicaldist = dist
        }
    }
    document.getElementById("mythical-label").innerHTML = mythical
	
	color = ""
    colordist = Infinity
    for (var i = 0; i < colors.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(colors[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(colors[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(colors[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(colors[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(colors[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(colors[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(colors[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(colors[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(colors[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(colors[i].stats.x - open), 2)
        if (dist < colordist) {
            color = colors[i].name
            colordist = dist
        }
    }
    document.getElementById("color-label").innerHTML = color
	
	music = ""
    musicdist = Infinity
    for (var i = 0; i < musics.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(musics[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(musics[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(musics[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(musics[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(musics[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(musics[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(musics[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(musics[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(musics[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(musics[i].stats.x - open), 2)
        if (dist < musicdist) {
            music = musics[i].name
            musicdist = dist
        }
    }
    document.getElementById("music-label").innerHTML = music
	
	psyc = ""
    psycdist = Infinity
    for (var i = 0; i < psycs.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(psycs[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(psycs[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(psycs[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(psycs[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(psycs[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(psycs[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(psycs[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(psycs[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(psycs[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(psycs[i].stats.x - open), 2)
        if (dist < psycdist) {
            psyc = psycs[i].name
            psycdist = dist
        }
    }
    document.getElementById("psyc-label").innerHTML = psyc
	
	neurotype = ""
    neurotypedist = Infinity
    for (var i = 0; i < neurotypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(neurotypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(neurotypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(neurotypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(neurotypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(neurotypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(neurotypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(neurotypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(neurotypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(neurotypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(neurotypes[i].stats.x - open), 2)
        if (dist < neurotypedist) {
            neurotype = neurotypes[i].name
            neurotypedist = dist
        }
    }
    document.getElementById("neurotype-label").innerHTML = neurotype
	
	country = ""
    countrydist = Infinity
    for (var i = 0; i < countries.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(countries[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(countries[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(countries[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(countries[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(countries[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(countries[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(countries[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(countries[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(countries[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(countries[i].stats.x - open), 2)
        if (dist < countrydist) {
            country = countries[i].name
            countrydist = dist
        }
    }
    document.getElementById("country-label").innerHTML = country
	
	planet = ""
    planetdist = Infinity
    for (var i = 0; i < planets.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(planets[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(planets[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(planets[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(planets[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(planets[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(planets[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(planets[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(planets[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(planets[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(planets[i].stats.x - open), 2)
        if (dist < planetdist) {
            planet = planets[i].name
            planetdist = dist
        }
    }
    document.getElementById("planet-label").innerHTML = planet
	
	usa = ""
    usadist = Infinity
    for (var i = 0; i < usas.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(usas[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(usas[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(usas[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(usas[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(usas[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(usas[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(usas[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(usas[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(usas[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(usas[i].stats.x - open), 2)
        if (dist < usadist) {
            usa = usas[i].name
            usadist = dist
        }
    }
    document.getElementById("usa-label").innerHTML = usa
	
	beverage = ""
    beveragedist = Infinity
    for (var i = 0; i < beverages.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(beverages[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(beverages[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(beverages[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(beverages[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(beverages[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(beverages[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(beverages[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(beverages[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(beverages[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(beverages[i].stats.x - open), 2)
        if (dist < beveragedist) {
            beverage = beverages[i].name
            beveragedist = dist
        }
    }
    document.getElementById("beverage-label").innerHTML = beverage
	
	walk = ""
    walkdist = Infinity
    for (var i = 0; i < walks.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(walks[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(walks[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(walks[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(walks[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(walks[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(walks[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(walks[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(walks[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(walks[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(walks[i].stats.x - open), 2)
        if (dist < walkdist) {
            walk = walks[i].name
            walkdist = dist
        }
    }
    document.getElementById("walk-label").innerHTML = walk
	
	t1t5 = ""
    t1t5dist = Infinity
    for (var i = 0; i < t1t5s.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(t1t5s[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(t1t5s[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(t1t5s[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(t1t5s[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(t1t5s[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(t1t5s[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(t1t5s[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(t1t5s[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(t1t5s[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(t1t5s[i].stats.x - open), 2)
        if (dist < t1t5dist) {
            t1t5 = t1t5s[i].name
            t1t5dist = dist
        }
    }
    document.getElementById("t1t5-label").innerHTML = t1t5
	
	tritype = ""
    tritypedist = Infinity
    for (var i = 0; i < tritypes.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(tritypes[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(tritypes[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(tritypes[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(tritypes[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(tritypes[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(tritypes[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(tritypes[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(tritypes[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(tritypes[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(tritypes[i].stats.x - open), 2)
        if (dist < tritypedist) {
            tritype = tritypes[i].name
            tritypedist = dist
        }
    }
    document.getElementById("tritype-label").innerHTML = tritype
	
	instinct = ""
    instinctdist = Infinity
    for (var i = 0; i < instincts.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(instincts[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(instincts[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(instincts[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(instincts[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(instincts[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(instincts[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(instincts[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(instincts[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(instincts[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(instincts[i].stats.x - open), 2)
        if (dist < instinctdist) {
            instinct = instincts[i].name
            instinctdist = dist
        }
    }
    document.getElementById("instinct-label").innerHTML = instinct
	
	windowsver = ""
    windowsverdist = Infinity
    for (var i = 0; i < windowsvers.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(windowsvers[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(windowsvers[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(windowsvers[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(windowsvers[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(windowsvers[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(windowsvers[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(windowsvers[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(windowsvers[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(windowsvers[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(windowsvers[i].stats.x - open), 2)
        if (dist < windowsverdist) {
            windowsver = windowsvers[i].name
            windowsverdist = dist
        }
    }
    document.getElementById("windowsver-label").innerHTML = windowsver
	
	food = ""
    fooddist = Infinity
    for (var i = 0; i < foods.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(foods[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(foods[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(foods[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(foods[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(foods[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(foods[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(foods[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(foods[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(foods[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(foods[i].stats.x - open), 2)
        if (dist < fooddist) {
            food = foods[i].name
            fooddist = dist
        }
    }
    document.getElementById("food-label").innerHTML = food
	
	outsider = ""
    outsiderdist = Infinity
    for (var i = 0; i < outsiders.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(outsiders[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(outsiders[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(outsiders[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(outsiders[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(outsiders[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(outsiders[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(outsiders[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(outsiders[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(outsiders[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(outsiders[i].stats.x - open), 2)
        if (dist < outsiderdist) {
            outsider = outsiders[i].name
            outsiderdist = dist
        }
    }
    document.getElementById("outsider-label").innerHTML = outsider
	
	version = ""
    versiondist = Infinity
    for (var i = 0; i < versions.length; i++) {
        dist = 0
        dist += Math.pow(Math.abs(versions[i].stats.a - assertive), 2)
        dist += Math.pow(Math.abs(versions[i].stats.c - compassionate), 2)
        dist += Math.pow(Math.abs(versions[i].stats.e - enthusiastic), 2)
        dist += Math.pow(Math.abs(versions[i].stats.p - polite), 2)
		dist += Math.pow(Math.abs(versions[i].stats.s - industrious), 2)
        dist += Math.pow(Math.abs(versions[i].stats.o - orderly), 2)
		dist += Math.pow(Math.abs(versions[i].stats.w - withdrawn), 2)
        dist += Math.pow(Math.abs(versions[i].stats.v - volatile), 2)
		dist += Math.pow(Math.abs(versions[i].stats.n - intellectual), 2)
        dist += Math.pow(Math.abs(versions[i].stats.x - open), 2)
        if (dist < versiondist) {
            version = versions[i].name
            versiondist = dist
        }
    }
    document.getElementById("version-label").innerHTML = version