(function() {
  var homeEl = document.querySelector('.primary-item:first-child')
  var primaryItems = document.querySelectorAll('.primary-item:nth-child(n+2)')
  var secondaryItems = document.querySelectorAll('.secondary-item')
  var titleEl = document.querySelector('.title')

  // Remove active class from all primary navigation items
  var deactivateItems = function() {
    console.log('deactivateItems')
    primaryItems.forEach(function(item) {
      item.classList.remove('active')
    })
  }

  // Add active class to a single primary navigation item
  var activateItem = function(item) {
    item.classList.add('active')
  }

  // Given an element, copy the innerHTML to the innerHTML of the titleEl
  var copyTextToTitle = function(item) {
    if (item && item.innerHTML) {
      titleEl.innerHTML = item.innerHTML
    } else {
      titleEl.innerHTML = ''
    }
  }

  // Listen for a click on each primary navigation item
  primaryItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      // Don't propofgate the event, this allows click on the body elsewhere
      // to deactivate any active navigation items
      event.stopPropagation()

      // Deactivate all items prior to activating an item
      deactivateItems()
      activateItem(item)
    })
  })

  // Set up event handler to deactivate primary navigations by clicking outside
  // of the dropdown element
  document.querySelector('body').addEventListener('click', function(item) {
    deactivateItems()
  })

  // Listen for a click on the secondary navigation items and update the
  // title of the hero component
  secondaryItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.stopPropagation()
      copyTextToTitle(item)
      deactivateItems()
    })
  })

  // Clear the title when clicking on the homeEl
  homeEl.addEventListener('click', function(event) {
    copyTextToTitle()
  })
})()
