# Step 1: Create the website settings
create_website_response = pyxl_ai__jit_plugin.CreateWebsiteOrUpdateWebsiteSettings(
    websiteTitle="Love You Forever",
    orderColorSchema="solid",
    header={"title": "Love You Forever"},
    footer={"description": "Forever and Always"},
    colors={"mainColor": "dark_pink", "secondColor": "pink"}
)
website_id = create_website_response.id

# Step 2: Create the main page
create_page_response = pyxl_ai__jit_plugin.CreatePage(
    pageOrder=1,
    page={"pageName": "Home", "pageType": "mainPage", "pageUrl": "/"},
    websiteId=website_id
)
main_page_id = create_page_response.id
