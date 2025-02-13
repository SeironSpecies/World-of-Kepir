/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1e3_XTFzUgt1Lx4Kxk2Q8yQYRx_k2QG9HAx-7qGwb-XQ";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ----------------------------------------------------------------- */
let sheetPages = {

    masterlist: "masterlist",
    eggs: "eggs",
    masterlistLog: "masterlist log",
    inventory: "inventory",
    inventoryLog: "inventory log",
    items: "items",
    traits: "traits",
    prompts: "prompts",
    faq: "faq",
    staff: "mods",

}


/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

        promptSheetPage: sheetPages.prompts,
        numOfPrompts: 3,

        staffSheetPage: sheetPages.staff,
        numOfStaff: 8,

        masterlistSheetPage: sheetPages.masterlist,
        numOfDesigns: 4,
        
        eggsSheetPage: sheetPages.eggs,
        numOfDesigns: 4,
    
    },


    /* Masterlist
    /* --------------------------------------------------------------- */
    masterlist: {

        sheetPage: sheetPages.masterlist,
        logSheetPage: sheetPages.masterlistLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist', 'Rarity', 'Codename', 'Traits', 'Secondary Species', 'Level'],
        fauxFolderColumn: 'Species',

    },

 /* Egg Masterlist
    /* --------------------------------------------------------------- */
    eggs: {

        sheetPage: sheetPages.eggs,
        logSheetPage: sheetPages.masterlistLog,

        itemAmount: 12,
        itemOrder: "asc",

        filterColumn: 'Design Type',
        searchFilterParams: ['Egg Batch', 'Egg', 'Owner', 'Rarity', 'Traits', 'Secondary Species'],
        fauxFolderColumn: 'Species',

    },

    
    /* Item Catalogue
    /* --------------------------------------------------------------- */
    items: {

        sheetPage: sheetPages.items,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        filterColumn: 'Rarity',
        searchFilterParams: ['Item'],
        fauxFolderColumn: 'Type',
    
    },


    /* Invetory
    /* --------------------------------------------------------------- */
    inventory: {

        sheetPage: sheetPages.inventory,
        itemSheetPage: sheetPages.items,
        logSheetPage: sheetPages.inventoryLog,
    
        itemAmount: 24,
        sortTypes: ['Currency', 'MYO Slot', 'Pet', 'Trait', 'Misc'],
        
        searchFilterParams: ['Username'],
    
    },


    /* Prompts
    /* --------------------------------------------------------------- */
    prompts: {
    
        sheetPage: sheetPages.prompts,

        itemAmount: 24,
        itemOrder: "desc",

        searchFilterParams: ['Title'],
    
    },


    /* Traits
    /* --------------------------------------------------------------- */
    traits: {
    
        sheetPage: sheetPages.traits,

        itemAmount: 24,
        itemOrder: "asc",

        filterColumn: 'Rarity',
        searchFilterParams: ['Trait'],
        fauxFolderColumn: 'Type',
    
    },


    /* Staff
    /* --------------------------------------------------------------- */
    staff: {
    
        sheetPage: sheetPages.staff,
    
    },


    /* FAQ
    /* --------------------------------------------------------------- */
    faq: {
    
        sheetPage: sheetPages.faq,
    
        itemAmount: 24,
        itemOrder: "asc",
    
        searchFilterParams: ['Tags'],
    
    },


}
