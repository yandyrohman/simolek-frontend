import React from 'react'
import { Close } from '@material-ui/icons'

export default class Detail extends React.Component {
  render() {
    let { show, data } = this.props;
    let display = show === true ? 'flex' : 'none';
    let currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'IDR',
    });
    return (
      <div className="kegiatan-detail-popup" style={{display: display}}>
        <div className="kegiatan-detail-close" onClick={() => this.props.closeDetailPopup()}>
          <Close />
        </div>
        <div className="kegiatan-detail-scroll">
          <div className="kegiatan-detail-box">
            <div className="kegiatan-detail-title">{data.nama_detail}</div>
            <SubKegiatan 
              label="PPTK"
              value={data.pptk}
            />
            <SubKegiatan 
              label="PPK"
              value={data.ppk}
            />
            <SubKegiatan 
              label="Anggaran"
              value={currency.format(data.anggaran)}
            />
            <SubKegiatan 
              label="Nilai Kontrak"
              value={currency.format(data.nilai_kontrak)}
            />
            <SubKegiatan 
              label="Realisasi"
              value={currency.format(data.realisasi)}
            />
            <SubKegiatan 
              label="Sumber Dana"
              value={data.sumber_dana}
            />
            <SubKegiatan 
              label="Lokasi"
              value={data.lokasi}
            />
            <SubKegiatan 
              label="Nomor Kontrak"
              value={data.no_kontrak}
            />
            <SubKegiatan 
              label="Tanggal Kontrak"
              value={data.tgl_kontrak ? data.tgl_kontrak : '-'}
            />
            <SubKegiatan 
              label="Penyedia Kegiatan"
              value={data.penyedia_kegiatan}
            />
            <SubKegiatan 
              label="Jangka Waktu Pelaksanaan"
              value={data.jangka_waktu_pelaksanaan}
            />
            <SubKegiatan 
              label="Tanggal Mulai"
              value={data.tgl_mulai ? data.tgl_mulai : '-'}
            />
            <SubKegiatan 
              label="Tanggal Selesai"
              value={data.tgl_selesai ? data.tgl_selesai : '-'}
            />
            <SubKegiatan 
              label="Persentase Fisik"
              value={`${data.persentase_fisik}%`}
            />
            <SubKegiatan 
              label="Persentase Keuangan"
              value={`${data.persentase_keuangan}%`}
            />
            <SubKegiatan 
              label="Nomor PHO"
              value={data.pho_nomor}
            />
            <SubKegiatan 
              label="Tanggal PHO"
              value={data.pho_tgl ? data.pho_tgl : '-'}
            />
            <SubKegiatan 
              label="SP2D"
              value={currency.format(data.sp2d)}
            />
            <SubKegiatan 
              label="Nomor Rekening"
              value={data.no_rekening}
            />
            <SubKegiatan 
              label="Telepon"
              value={data.telepon}
            />
            <SubKegiatan 
              label="Nama Direktur"
              value={data.nama_direktur}
            />
            <SubKegiatan 
              label="File Kontrak"
              download={true}
            />
            <SubKegiatan 
              label="NPWP"
              value={data.npwp}
            />
            <SubKegiatan 
              label="Nomor SPK"
              value={data.no_spk}
            />
            <SubKegiatan 
              label="Tanggal SPK"
              value={data.tgl_spk ? data.tgl_spk : '-'}
            />
            <SubKegiatan 
              label="Nomor SPMK"
              value={data.no_spmk}
            />
            <SubKegiatan 
              label="Tanggal SPMK"
              value={data.tgl_spmk ? data.tgl_spmk : '-'}
            />
            <SubKegiatan 
              label="Keterangan"
              value={data.keterangan}
            />
          </div>
        </div>
      </div>
    )
  }
}

class SubKegiatan extends React.Component {
  render() {
    let { label, value, download } = this.props;
    return (
      <div className="kegiatan-detail-item">
        <div className="kegiatan-detail-item-label">{label}</div>
        <div className="kegiatan-detail-item-value">
          {download ? <a href="/">Unduh</a> : value}
        </div>
      </div>
    )
  }
}