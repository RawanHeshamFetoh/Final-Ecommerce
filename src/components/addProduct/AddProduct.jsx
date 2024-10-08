

import { Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import style from './addProduct.module.css';
import styles from '../../pages/Login/login.module.css';
import FormController from '../formConteoller/formController';

const AddProduct = () => {
    const initialValues = {
        title: '',
        description: "",
        price: "",
        priceAfterDisc: "",
        discount: "",
        colors: [],
        size: [],
        imageCover: [],
        stock: "",
        category: "",
        brand: "",
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("Required").min(3, "Invalid Product name").max(100, "Invalid Product name"),
        description: Yup.string().required("Required").min(3, "Invalid description"),
        price: Yup.number().required("Required").positive("Not valid price"),
        priceAfterDisc: Yup.number(),
        discount: Yup.number().min(0).max(100),
        imageCover: Yup.mixed().required("Required"),
        stock: Yup.number().required("Required"),
        category: Yup.string().required("Required"),
        brand: Yup.string().required("Required"),
        size: Yup.array().of(Yup.string().oneOf(['sm', 'md', 'lg', 'xl'], "invalid")),
        colors: Yup.array().of(Yup.string()),
    });

    const onSubmit = (values) => {
        console.log(values);
    };
    const [tempColor, setTempColor] = useState('')
    const [tempSize, setTempSize] = useState('')
    return (
        <div className={style.AddProduct}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ values, setFieldValue, isValid, handleSubmit }) => {
                    const handleAddSize = (e) => {
                        e.preventDefault();
                        const newSize = tempSize.trim();
                        if (newSize && !values.size.includes(newSize)) {
                            setFieldValue("size", [...values.size, newSize]);
                            setTempSize("")
                        }
                    };

                    ;

                    const handleAddColor = (e) => {
                        e.preventDefault();
                        const newColor = tempColor.trim();
                        if (newColor && !values.colors.includes(newColor)) {
                            setFieldValue("colors", [...values.colors, newColor]);
                            setTempColor('');
                        }
                    };
                    const isAddColorButtonDisabled = !tempColor.trim() || values.colors.includes(tempColor.trim());


                    const isAddSizeButtonDisabled = !['sm', 'md', 'lg', 'xl'].includes(tempSize) || values.size.includes(tempSize);

                    // const handlePriceChange = (value) => {
                    //     const price = parseFloat(value);
                    //     setFieldValue('price', value);

                    //     // Calculate price after discount
                    //     const discount = parseFloat(values.discount);
                    //     if (!isNaN(price) && !isNaN(discount)) {
                    //         const discountedPrice = price - (price * (discount / 100));
                    //         setFieldValue('priceAfterDisc', discountedPrice.toFixed(2));
                    //     } else {
                    //         setFieldValue('priceAfterDisc', '');
                    //     }
                    // };

                    // const handleDiscountChange = (value) => {
                    //     const discount = parseFloat(value);
                    //     setFieldValue('discount', value);

                    //     // Calculate price after discount
                    //     const price = parseFloat(values.price);
                    //     if (!isNaN(price) && !isNaN(discount)) {
                    //         const discountedPrice = price - (price * (discount / 100));
                    //         setFieldValue('priceAfterDisc', discountedPrice.toFixed(2));
                    //     } else {
                    //         setFieldValue('priceAfterDisc', '');
                    //     }
                    // };
                    //     const price = parseFloat(values.price);
                    //     if (!isNaN(price) && !isNaN(discount)) {
                    //         const discountedPrice = price - (price * (discount / 100));
                    //         setFieldValue('priceAfterDisc', discountedPrice.toFixed(2));
                    //     } else {
                    //         setFieldValue('priceAfterDisc', '');
                    //     }
                    // };

                    return (
                        <form onSubmit={handleSubmit} className={style.formAddProduct}>
                            <div className={style.formAddProductContainer}>


                                <div>
                                    <div className={style.formGroup}>
                                        <div className={style.formInput}>
                                            <label htmlFor="title">Product Title</label>
                                            <FormController
                                                control="input"
                                                type="text"
                                                name="title"
                                                id="title"
                                                className={` ${styles.input} ${style.addProductInupt}`}
                                                divStyle={styles.formControl}
                                            />
                                        </div>
                                        <div className={style.formInput}>
                                            <label htmlFor='description'>Description</label>
                                            <FormController
                                                control="textarea"
                                                name="description"
                                                id="description"
                                                className={`${styles.textArea} ${style.addProductInupt}`}
                                                divStyle={styles.formControl}
                                            />
                                        </div>
                                        <div className={style.formSubGroup}>
                                            <div className={style.subGroup}>
                                                <label htmlFor='size'>Size</label>
                                                <div>
                                                    <FormController
                                                        control="input"
                                                        name="size"
                                                        placeholder="size"
                                                        id="size"
                                                        className={`${style.formGroubSubInput} ${style.size}`}

                                                        value={tempSize}
                                                        onChange={(e) => setTempSize(e.target.value)}
                                                    />
                                                    <button onClick={handleAddSize} disabled={isAddSizeButtonDisabled}><i className="fa-solid fa-plus"></i> </button>
                                                </div>
                                                <div>
                                                    <div style={{ padding: "10px 0" }}>
                                                        {values.size.map((s, i) => (
                                                            <span key={i} className={style.displaySizes}>{s}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.subGroup}>
                                                {/* <p className={style.pColor}>color</p> */}
                                                <label htmlFor='color' className={style.colorLabel}>Color</label>
                                                <div>
                                                    <FormController
                                                        control="input"
                                                        type="color"
                                                        name="color"
                                                        placeholder="color"
                                                        id="color"
                                                        className={` ${style.formGroubSubInput} ${style.colorInput}`}

                                                        value={tempColor}

                                                        onChange={(e) => setTempColor(e.target.value)}
                                                    />
                                                    <button onClick={handleAddColor} disabled={isAddColorButtonDisabled}><i className="fa-solid fa-plus"></i> </button>
                                                </div>
                                                <div>
                                                    <div style={{ padding: "10px 0" }}>
                                                        {values.colors.map((c, i) => (
                                                            <span key={i} style={{
                                                                backgroundColor: c, display: "inline-block", width: "20px", height: "20px", marginRight: "10px"
                                                            }}></span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={` ${style.formSubGroup}`}>
                                        <div className={style.priceConatiner}>
                                            <div className={style.subGroup}>
                                                <label htmlFor="price">Price</label>
                                                <FormController
                                                    control="input"
                                                    type="number"
                                                    name="price"
                                                    id="price"
                                                    className={` ${styles.input} ${style.addProductInupt}`}
                                                    divStyle={styles.formControl}

                                                />
                                            </div>
                                            <div className={style.subGroup}>
                                                <label htmlFor="discount">discount</label>
                                                <FormController
                                                    control="input"
                                                    type="number"
                                                    name="discount"
                                                    id="discount"
                                                    className={` ${styles.input} ${style.addProductInupt}`}
                                                    divStyle={styles.formControl}
                                                />
                                            </div>
                                        </div>
                                        <div className={style.priceConatiner}>

                                            <div className={style.subGroup}>
                                                <label htmlFor="priceAfterDisc">priceAfterDisc</label>
                                                <FormController
                                                    control="input"
                                                    type="number"
                                                    name="priceAfterDisc"
                                                    id="priceAfterDisc"

                                                    className={` ${styles.input} ${style.addProductInupt}`}
                                                    divStyle={styles.formControl}

                                                />
                                            </div>
                                            <div className={style.subGroup}>
                                                <label htmlFor="stock">stock</label>
                                                <FormController
                                                    control="input"
                                                    type="number"
                                                    name="stock"
                                                    id="stock"
                                                    className={` ${styles.input} ${style.addProductInupt}`}
                                                    divStyle={styles.formControl}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className={style.formGroup}>
                                        <div className={style.formInput}>
                                            <label htmlFor="imageCover" className={style.uploadImgProduct}><i class="fa-solid fa-cloud-arrow-up"></i> click here to upload image cover</label>
                                            <FormController
                                                control="input"
                                                type="file"
                                                name="imageCover"
                                                id="imageCover"
                                                className={` ${styles.input} ${style.addProductInupt}`}
                                                divStyle={styles.formControl}
                                                hidden
                                            />
                                        </div>
                                    </div>
                                    <div >
                                        <div >
                                            <label htmlFor="brand">brand</label>
                                            <FormController
                                                control="input"
                                                type="text"
                                                name="brand"
                                                id="brand"
                                                className={` ${styles.input} ${style.addProductInupt}`}
                                                divStyle={styles.formControl}
                                            />
                                        </div>
                                        <div >
                                            <label htmlFor="category">category</label>
                                            <FormController
                                                control="input"
                                                type="text"
                                                name="category"
                                                id="category"
                                                className={` ${styles.input} ${style.addProductInupt}`}
                                                divStyle={styles.formControl}
                                            />
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <button type="submit" className={styles.submit} disabled={!isValid}>Send Message</button>

                        </form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default AddProduct;

