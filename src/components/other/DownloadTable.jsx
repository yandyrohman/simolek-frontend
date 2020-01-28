import React, { Component, Fragment } from 'react'

export default class DownloadTable extends Component {
  render() {
    let { data } = this.props;
    return (
      <table id="download-table" style={{display: 'none'}}>
        <tr>
          <td>NAMA PROGRAM/KEGIATAN/SUB KEGIATAN</td>
          <td>JENIS</td>
          <td>NAMA PPK</td>
          <td>NAMA PPTK</td>
          <td>ANGGARAN</td>
          <td>NILAI KONTRAK</td>
          <td>REALISASI</td>
          <td>SUMBER DANA</td>
          <td>LOKASI</td>
          <td>NO KONTRAK</td>
          <td>TANGGAL KONTRAK</td>
          <td>PENYEDIA KEGIATAN</td>
          <td>JANGKA WAKTU PELAKSANAAN</td>
          <td>TANGGAL MULAI</td>
          <td>TANGGAL SELESAI</td>
          <td>PERSENTASE FISIK</td>
          <td>PERSENTASE KEUANGAN</td>
          <td>SP2D 1</td>
          <td>KETERANGAN SP2D 1</td>
          <td>SP2D 2</td>
          <td>KETERANGAN SP2D 2</td>
          <td>SP2D 3</td>
          <td>KETERANGAN SP2D3</td>
          <td>SP2D 4</td>
          <td>KETERANGAN SP2D 4</td>
          <td>SP2D 5</td>
          <td>KETERANGAN SP2D 5</td>
          <td>ADENDUM 1 TANGGAL</td>
          <td>ADENDUM 1 NOMOR</td>
          <td>ADENDUM 1 WAKTU</td>
          <td>ADENDUM 1 TARGET</td>
          <td>ADENDUM 1 NILAI</td>
          <td>ADENDUM 1 KETERANGAN</td>
          <td>ADENDUM 2 TANGGAL</td>
          <td>ADENDUM 2 NOMOR</td>
          <td>ADENDUM 2 WAKTU</td>
          <td>ADENDUM 2 TARGET</td>
          <td>ADENDUM 2 NILAI</td>
          <td>ADENDUM 2 KETERANGAN</td>
          <td>ADENDUM 3 TANGGAL</td>
          <td>ADENDUM 3 NOMOR</td>
          <td>ADENDUM 3 WAKTU</td>
          <td>ADENDUM 3 TARGET</td>
          <td>ADENDUM 3 NILAI</td>
          <td>ADENDUM 3 KETERANGAN</td>
          <td>NO REKENING</td>
          <td>TELEPON</td>
          <td>NAMA DIREKTUR</td>
          <td>NPWP</td>
          <td>NO SPK</td>
          <td>TANGGAL SPK</td>
          <td>NO SPMK</td>
          <td>TANGGAL SPMK</td>
        </tr>
        {
          data.map((program, i) => (
            <Fragment>
              <tr key={i}>
                <td>{program.nama_program}</td>
                <td>Program</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {
                program.child.map(kegiatan => (
                  <Fragment>
                    <tr key={i}>
                      <td>{kegiatan.nama_kegiatan}</td>
                      <td>Kegiatan</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    {
                      kegiatan.grandchild.map(subkegiatan => (
                        <tr key={i}>
                          <td>{subkegiatan.nama_detail}</td>
                          <td>Sub Kegiatan</td>
                          <td>{subkegiatan.ppk}</td>
                          <td>{subkegiatan.pptk}</td>
                          <td>{subkegiatan.anggaran}</td>
                          <td>{subkegiatan.nilai_kontrak}</td>
                          <td>{subkegiatan.realisasi}</td>
                          <td>{subkegiatan.sumber_dana}</td>
                          <td>{subkegiatan.lokasi}</td>
                          <td>{subkegiatan.no_kontrak}</td>
                          <td>{subkegiatan.tgl_kontrak}</td>
                          <td>{subkegiatan.penyedia_kegiatan}</td>
                          <td>{subkegiatan.jangka_waktu_pelaksanaan}</td>
                          <td>{subkegiatan.tgl_mulai}</td>
                          <td>{subkegiatan.tgl_selesai}</td>
                          <td>{subkegiatan.persentase_fisik}</td>
                          <td>{subkegiatan.persentase_keuangan}</td>
                          <td>{subkegiatan.sp2d_1}</td>
                          <td>{subkegiatan.sp2d_1_ket}</td>
                          <td>{subkegiatan.sp2d_2}</td>
                          <td>{subkegiatan.sp2d_2_ket}</td>
                          <td>{subkegiatan.sp2d_3}</td>
                          <td>{subkegiatan.sp2d_3_ket}</td>
                          <td>{subkegiatan.sp2d_4}</td>
                          <td>{subkegiatan.sp2d_4_ket}</td>
                          <td>{subkegiatan.sp2d_5}</td>
                          <td>{subkegiatan.sp2d_5_ket}</td>
                          <td>{subkegiatan.adendum_1_tgl}</td>
                          <td>{subkegiatan.adendum_1_nomor}</td>
                          <td>{subkegiatan.adendum_1_waktu}</td>
                          <td>{subkegiatan.adendum_1_target}</td>
                          <td>{subkegiatan.adendum_1_nilai}</td>
                          <td>{subkegiatan.adendum_1_ket}</td>
                          <td>{subkegiatan.adendum_2_tgl}</td>
                          <td>{subkegiatan.adendum_2_nomor}</td>
                          <td>{subkegiatan.adendum_2_waktu}</td>
                          <td>{subkegiatan.adendum_2_target}</td>
                          <td>{subkegiatan.adendum_2_nilai}</td>
                          <td>{subkegiatan.adendum_2_ket}</td>
                          <td>{subkegiatan.adendum_3_tgl}</td>
                          <td>{subkegiatan.adendum_3_nomor}</td>
                          <td>{subkegiatan.adendum_3_waktu}</td>
                          <td>{subkegiatan.adendum_3_target}</td>
                          <td>{subkegiatan.adendum_3_nilai}</td>
                          <td>{subkegiatan.adendum_3_ket}</td>
                          <td>{subkegiatan.no_rekening}</td>
                          <td>{subkegiatan.telepon}</td>
                          <td>{subkegiatan.nama_direktur}</td>
                          <td>{subkegiatan.npwp}</td>
                          <td>{subkegiatan.no_spk}</td>
                          <td>{subkegiatan.tgl_spk}</td>
                          <td>{subkegiatan.no_spmk}</td>
                          <td>{subkegiatan.tgl_spmk}</td>
                        </tr>
                      ))
                    }
                  </Fragment>
                ))
              }
            </Fragment>
          ))
        }
      </table>
    )
  }
}


