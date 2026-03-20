{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // SC Fremont Realty - JavaScript\
\
const hamburger = document.querySelector('.hamburger');\
const navMenu = document.querySelector('.nav-menu');\
\
if (hamburger) \{\
    hamburger.addEventListener('click', () => \{\
        navMenu.classList.toggle('active');\
        const spans = hamburger.querySelectorAll('span');\
        if (navMenu.classList.contains('active')) \{\
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';\
            spans[1].style.opacity = '0';\
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';\
        \} else \{\
            spans[0].style.transform = 'none';\
            spans[1].style.opacity = '1';\
            spans[2].style.transform = 'none';\
        \}\
    \});\
\
    document.querySelectorAll('.nav-menu a').forEach(link => \{\
        link.addEventListener('click', () => \{\
            navMenu.classList.remove('active');\
            const spans = hamburger.querySelectorAll('span');\
            spans[0].style.transform = 'none';\
            spans[1].style.opacity = '1';\
            spans[2].style.transform = 'none';\
        \});\
    \});\
\}\
\
function filterProperties() \{\
    const assetType = document.getElementById('assetType');\
    const transactionType = document.getElementById('transactionType');\
    const location = document.getElementById('location');\
    \
    if (!assetType) return;\
    \
    const selectedAsset = assetType.value;\
    const selectedTransaction = transactionType.value;\
    const locationValue = location.value.toLowerCase();\
    const listings = document.querySelectorAll('.listing-card');\
    \
    listings.forEach(listing => \{\
        const listingType = listing.getAttribute('data-type');\
        const listingTransaction = listing.getAttribute('data-transaction');\
        const listingLocation = listing.querySelector('.listing-location').textContent.toLowerCase();\
        \
        let showListing = true;\
        if (selectedAsset !== 'all' && listingType !== selectedAsset) showListing = false;\
        if (selectedTransaction !== 'all' && listingTransaction !== selectedTransaction) showListing = false;\
        if (locationValue && !listingLocation.includes(locationValue)) showListing = false;\
        \
        listing.style.display = showListing ? 'block' : 'none';\
    \});\
\}\
\
const contactForm = document.getElementById('contactForm');\
if (contactForm) \{\
    contactForm.addEventListener('submit', function(e) \{\
        e.preventDefault();\
        const formData = \{\
            name: document.getElementById('name').value,\
            email: document.getElementById('email').value,\
            phone: document.getElementById('phone').value,\
            interest: document.getElementById('interest').value,\
            assetType: document.getElementById('assetType').value,\
            message: document.getElementById('message').value\
        \};\
        \
        const subject = encodeURIComponent('Commercial Real Estate Inquiry from ' + formData.name);\
        const body = encodeURIComponent('Name: ' + formData.name + '\\nEmail: ' + formData.email + '\\nPhone: ' + formData.phone + '\\nInterest: ' + formData.interest + '\\nAsset Type: ' + formData.assetType + '\\n\\nMessage:\\n' + formData.message);\
        window.location.href = 'mailto:suresh.chappidi@ccim.net?subject=' + subject + '&body=' + body;\
        \
        const formMessage = document.getElementById('formMessage');\
        formMessage.className = 'form-message success';\
        formMessage.textContent = 'Your email client has been opened. Please send the email to complete your inquiry.';\
        contactForm.reset();\
    \});\
\}\
}