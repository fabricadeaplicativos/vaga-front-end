class Comic {
    public id: number;
    public title: string;
    public description: string;
    public thumbnail: string;
    public pageCount: number;
    public format: string;
    public prices: Array<Price>;
    public rare: boolean;
    public quantity: number;

    constructor(obj: any) {
        this.id = obj.id;
        this.title = obj.title;
        this.description = obj.description;
        this.thumbnail = `${obj.thumbnail.path}.${obj.thumbnail.extension}`;
        this.pageCount = obj.pageCount;
        this.format = obj.format;
        this.price(obj.prices);
        this.rare = false;
        this.quantity = 1;
    }

    private price(data: any): Array<Price> {
        const prices = Array<Price>();
        data.forEach(item => {
            if (item.price === 0) {
                item.price = 5.99;
            }
            item.price = (item.price * 3.71);
            prices.push(new Price(item.type, item.price));
        });
        return this.prices = prices;
    }
}

class Price {
    constructor(
        public type: string,
        public price: number

    ) {}
}

export {Comic, Price };
