import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { onSendBetaCodeAction } from 'actions/beta'

function Beta() {
  const [code, setCode] = useState('')
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const { response } = useSelector((state) => state.beta)

  useEffect(() => {
    if (
      response &&
      response.success === 'ok' &&
      !localStorage.getItem('auth')
    ) {
      localStorage.setItem('auth', 'auth')
      history.push('/secret/home')
    }
    if (localStorage.getItem('auth')) {
      history.push('/secret/home')
    }
  }, [response, history])

  const onChange = (e) => {
    const { value } = e.target
    setCode(value)
  }

  const onSumit = (e) => {
    if (code) {
      dispatch(onSendBetaCodeAction({ code }))
    }
    e.preventDefault()
  }

  return (
    <section className="beta">
      <article className="container">
        <h1>
          {t('betaEn.title1')} <span>{t('betaEn.title2')}</span>
        </h1>
        <form onSubmit={onSumit}>
          <label>{t('betaEn.label')}</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={t('betaEn.placeholder')}
              onChange={onChange}
              value={code}
            />
            <button
              onClick={onSumit}
              className="btn btn-default"
              id="basic-addon3"
            >
              {t('betaEn.button')}
            </button>
          </div>
          <p className="error">{response && response.error}</p>
        </form>
      </article>
    </section>
  )
}

export default Beta
