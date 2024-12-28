const updateCheckbox = (newData: TypedProduct, e: React.ChangeEvent<HTMLInputElement>) => {
    newData[e.target.id] = e.target.checked;
};

const updateDescription = (newData: TypedProduct, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    newData[e.target.id].description = e.target.value;
};

const updateCategory = (newData: TypedProduct, categories: Category[], e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const category = categories.find(category => category.name === e.target.value);
    if (category) {
        newData.category = { id: category.id, name: category.name, image: category.image };
    }
};

const updateCurrency = (newData: TypedProduct, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    newData.price.currency = e.target.value;
};

const updatePrice = (newData: TypedProduct, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const price = parseInt(e.target.value);
    if (!isNaN(price)) {
        newData.price.price = price;
        newData.price.discountPrice = (price * newData.price.percents / 100).toString();
    } else {
        newData.price.price = 0;
        newData.price.discountPrice = '';
    }
};

const updateDiscount = (newData: TypedProduct, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let percents = Math.max(0, Math.min(100, parseInt(e.target.value)));

    newData.price.percents = percents;
    newData.price.discountPrice = (newData.price.price - (newData.price.price * (percents / 100))).toString();

    if (percents === 0) {
        newData.price.discount = false;
        newData.price.highDiscount = false;
    } else {
        newData.price.discount = true;
        newData.price.highDiscount = percents >= 30;
    }
};

const updateUrl = (newData: TypedProduct, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const urlIndex = parseInt(e.target.id.charAt(e.target.id.length - 1)) - 1;
    if (!newData.preview.urls[urlIndex]) {
        newData.preview.urls[urlIndex] = { url: '' };
    }
    newData.preview.urls[urlIndex].url = e.target.value;
};

export const updateFunctions = {
    updateCategory,
    updateCheckbox,
    updateCurrency,
    updateDescription,
    updateDiscount,
    updatePrice,
    updateUrl,
}