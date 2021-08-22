function onScrollToTopClick(event) {
    event.stopPropagation();
    event.preventDefault();
    window.scrollTo(0,0);
}