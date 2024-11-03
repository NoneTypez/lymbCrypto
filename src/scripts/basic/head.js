class Head {
    constructor(stylesPath, titleName) {
        this.stylesPath = stylesPath;
        this.title = titleName;
        const HEAD = this.createHeadBlock()
        try {
            this.init()
        } catch (error) {
            console.error(`Ошибка инициализации блока HEAD: ${error}`)
        }
    }

    createHeadBlock() {
        // create a Head element
        const headElement = document.createElement('head');
        return headElement;
    };

    createMetaCharset() {
        //create a Meta object
        const metaCharset = document.createElement('meta');
        metaCharset.setAttribute('charset', 'UTF-8');
        this.HEAD.appendChild(metaCharset);
    };

    createMetaViewport() {
        // create a Meta object for viewport
        const metaViewport = document.createElement('meta');
        metaViewport.name = 'viewport';
        metaViewport.content = 'width=device-width, initial-scale=1.0';
        this.HEAD.appendChild(metaViewport);
    };

    createTitle() {
        // create a title element
        const titleElement = document.createElement('title');
        titleElement.textContent = this.title;
        this.HEAD.appendChild(titleElement);
    };

    createStylesLink() {
        // create a link element
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = this.stylesPath;
        this.HEAD.appendChild(linkElement);
    }

    init() {
        // add all elements to head container
        this.createMetaCharset();
        this.createMetaViewport();
        this.createTitle();
        this.createStylesLink();
        document.documentElement.prepend(this.HEAD);
    }
}

