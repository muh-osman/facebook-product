import style from "./Features.module.scss"

export default function Features() {
  return (
    <div className={style.features_container}>

        <div>
            <h1>نظرة عامة</h1>
            <hr />
        </div>

        <div className={style.table_and_feature_box}>
            <div className={style.description}>
                <h2>الميزات الأساسية</h2>
                <ul>
                    <li>غسالة 5 كغ 2 في 1</li>
                    <li>سهلة الحمل وخفيفة الوزن</li>
                    <li>مناسبة لغسل الأحذية والجوارب والملابس</li>
                    <li>مؤقت زمني للتشغيل والتجفيف</li>
                    <li>مزودة بسلة للتجفيف</li>
                    <li>متعددة الاستعمالات</li>
                    <li>مناسبة للملابس الداخلية</li>
                    <li>مناسبة لملابس الأطفال والرضع</li>
                    <li>مناسبة للجوارب للتقليل من ضياعها</li>
                    <li>مناسبة للأحذية خاصة في فصل الشتاء</li>
                    <li>مؤقت التشغيل الذاتي بميزة الدوران العكسي</li>
                    <li>مناسبة للاستعمال الشخصي والأسرة الصغيرة</li>
                </ul>
            </div>
            <div className={style.table}>
                <h2>المواصفات</h2>
                <table className="table table-striped">
                    <tbody>
                            <tr>
                            <td>السعة</td>
                            <td>5 كغ</td>
                            </tr>
                            <tr>
                            <td>الأبعاد</td>
                            <td>35cm × 35cm الارتفاع 50cm</td>
                            </tr>
                            <tr>
                            <td>مؤقت زمني</td>
                            <td>نعم</td>
                            </tr>
                            <tr>
                            <td>فرشة لتنظيف الأحذية</td>
                            <td>نعم</td>
                            </tr>
                            <tr>
                            <td>سلة للتجفيف</td>
                            <td>نعم</td>
                            </tr>
                            <tr>
                            <td>انبوب تعبة المياه وأنبوب الصرف</td>
                            <td>نعم</td>
                            </tr>
                            <tr>
                            <td>كتالوك التشغيل و مفك للصيانة</td>
                            <td>نعم</td>
                            </tr>
                            <tr>
                            <td>مقبض للحمل من الخلف</td>
                            <td>نعم</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
  )
}