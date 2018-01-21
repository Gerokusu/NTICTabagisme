$(document).ready(function()
{
    var SELECTOR_PAGE = "#panel-page";
    var SELECTOR_TITLES = "#panel-sections-titles";
    var SELECTOR_TITLE = ".panel-sections-title";
    var SELECTOR_TITLE_ACTIVE = ".panel-sections-title-active";
    var SELECTOR_ARTICLES_LIST = "#panel-page-articles";
    var SELECTOR_ARTICLE = ".panel-page-article";
    var ATTR_DATA_ARTICLE = "data-article";

    /* Store the articles positions to an array */
    var page = $(SELECTOR_PAGE).first();
    var titles = $(SELECTOR_TITLES).first();
    var articles = $(SELECTOR_ARTICLES_LIST).first();
    var articlesPosition = {};
    for(var article of articles.find(SELECTOR_ARTICLE))
    {
        if(page)
        {
            articlesPosition[$(article).attr(ATTR_DATA_ARTICLE)] = $(article).offset().top;
        }
    }

    /* Manages the click event */
    $(SELECTOR_TITLE).each(function()
    {
        var self = $(this);
        $(window).resize(function()
        {
            for(var article of articles.find(SELECTOR_ARTICLE))
            {
                if(page)
                {
                    articlesPosition[$(article).attr(ATTR_DATA_ARTICLE)] = $(article).offset().top + page.scrollTop();
                }
            }
        });

        self.click(function()
        {
            var articlePosition = articlesPosition[self.attr(ATTR_DATA_ARTICLE)];
            if(articlePosition != undefined)
            {
                page.scrollTo(articlePosition, 400);
            }
        });

        page.scroll(function()
        {
            var articlePosition = articlesPosition[self.attr(ATTR_DATA_ARTICLE)];
            if(articlePosition != undefined && page.scrollTop() >= articlePosition && page.scrollTop() <= articlePosition + page.outerHeight())
            {
                for(var title of titles.find(SELECTOR_TITLE))
                {
                    $(title).removeClass(SELECTOR_TITLE_ACTIVE.replace(".", ""));
                }
                self.addClass(SELECTOR_TITLE_ACTIVE.replace(".", ""));
            }
        });
    });
});
