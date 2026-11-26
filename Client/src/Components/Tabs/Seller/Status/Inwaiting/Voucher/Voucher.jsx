import React, { useEffect, useState } from 'react'
import Style from './Voucher.module.css'
import Denied from '../../Denied/Denied';
import Approved from '../../Approved/Approved';
import ModalSellerVoucher from '../../../../../Modal/ModalSellerVoucher/ModalSellerVoucher';




const Voucher = ({ transaction }) => {
  const [imgDocument, setImgDocument] = useState(null)
  const [pdfDocument, setPdfDocument] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [btnSelector, setBtnSelector] = useState(null)

  useEffect(() => {
    if (transaction?.format === 'image') {
      setImgDocument(transaction.payment_proof)
    } else {
      setPdfDocument(transaction.payment_proof)
    }
  }, [transaction?.format, transaction.payment_proof])


  const handleBtn = (e) => {
    setShowModal(!showModal)
    setBtnSelector(e.target.value)
  }

  return (
    <div>
      {showModal && <ModalSellerVoucher setShowModal={setShowModal} transaction={transaction} btnSelector={btnSelector} />}
      {transaction.status === 'DENIED'
        ?
        <Denied /> :
        transaction.status === 'APPROVED'
          ?
          <Approved /> :
          <div>
            {imgDocument
              ?
              <div className={Style.imgPreviewWrappper}>
                <img
                  className={Style.imgPreview}
                  src={imgDocument}
                  alt="Payment receipt"
                />
              </div> :
              pdfDocument
                ?
                <div className={Style.imgPreviewWrappper}>
                  <embed className={Style.embedPdf} src={`${pdfDocument}#toolbar=0`} type='application/pdf'   width="283" height="399"/>
                </div> :
                undefined
            }
            <div className={Style.containerVoucher_button}>
              <button
                type='button'
                value='cancel'
                className={`btnprimario ${Style.modify}`}
                onClick={handleBtn}>
                CANCEL
              </button>
              <button
                type='button'
                value='acept'
                className={`btnprimario ${Style.modify} ${Style.modifyAcept}`}
                onClick={handleBtn}>
                ACEPT
              </button>
            </div>
          </div>
      }
    </div>
  )
}

export default Voucher
