import React from 'react';
import dokterService from '../service/dokterService'


export default class index extends React.Component {


    constructor() {
        super()
        this.state = {
            showModal: false,
            ListBioDokter: [],
            ListBioEduDokter: [],
            ListDokterEdu: [], // institution dokter
            ListDokterTindakan: [],
            ListDokterRiwayat: [],
            ListRSDokter: [],
            ListPengalamanDokter: [],
            ListStartFrom: [],
            ListJadwalDokterNew: [],
            data: {}
        }
    }


    getBioDokter = async (doctor_id) => {
        const respon = await dokterService.bioDokter(doctor_id)
        if (respon.success) {
            this.setState({
                ListBioDokter: respon.result
            })
        }
    }

    getBioEduDokter = async (doctor_id) => {
        const respon = await dokterService.dokterSpesialisasiBio(doctor_id)
        if (respon.success) {
            this.setState({
                ListBioEduDokter: respon.result
            })
        }
    }

    getDokterEduBio = async (doctor_id) => {
        const respon = await dokterService.dokterinstitutionEdu(doctor_id)
        if (respon.success) {
            this.setState({
                ListDokterEdu: respon.result
            })
        }
    }

    getDokterTindakan = async (doctor_id) => {
        const respon = await dokterService.dokterTindakan(doctor_id)
        if (respon.success) {
            this.setState({
                ListDokterTindakan: respon.result
            })
        }
    }

    getDokterRiwayat = async (doctor_id) => {
        const respon = await dokterService.dokterRiwayat(doctor_id)
        if (respon.success) {
            this.setState({
                ListDokterRiwayat: respon.result
            })
        }
    }

    getDokterEdu = async (doctor_id) => {
        const respon = await dokterService.dokterinstitutionEdu(doctor_id)
        if (respon.success) {
            this.setState({
                ListDokterEdu: respon.result
            })
        }
    }

    getRSDokter = async (doctor_id) => {
        const respon = await dokterService.rsDokter(doctor_id)
        if (respon.success) {
            this.setState({
                ListRSDokter: respon.result
            })

            this.state.ListRSDokter.map((data, index) => {
                return (
                    this.jadwalRender(respon.result[index].doctor_id, respon.result[index].rs_id)
                )
            })

        }
    }

    getPengalamanDokter = async (doctor_id) => {
        const respon = await dokterService.pengalamanDokter(doctor_id)
        if (respon.success) {
            this.setState({
                ListPengalamanDokter: respon.result
            })
        }
    }

    getStartFrom = async (doctor_id) => {
        const respon = await dokterService.start_from(doctor_id)
        if (respon.success) {
            this.setState({
                ListStartFrom: respon.result
            })
        }
    }

    jadwalRender = async (id_dokter, id_rs) => {
        let c = {
            doctor_id: id_dokter,
            rs_id: id_rs
        }

        const respon = await dokterService.testJadwalDokter(c)
        if (respon.success) {
            this.setState({ data: respon.result })
            this.setState({
                ListJadwalDokterNew: [...this.state.ListJadwalDokterNew, this.state.data]
            });
        }
    }

    componentDidMount() {
        const id = localStorage.getItem('id')
        this.getBioDokter(id)
        this.getBioEduDokter(id)
        this.getDokterEduBio(id)
        this.getDokterTindakan(id)
        this.getDokterRiwayat(id)
        this.getDokterEdu(id)
        this.getRSDokter(id)
        this.getPengalamanDokter(id)
        this.getStartFrom(id)
    }

    render() {
        const { showModal, ListBioDokter, ListBioEduDokter, ListDokterRiwayat, ListDokterTindakan, ListDokterEdu,
            ListRSDokter, ListJadwalDokter, ListPengalamanDokter, ListStartFrom, ListJadwalDokterNew }
            = this.state
        return (
            <div>
                {
                    ListBioDokter.map(data => {
                        return (
                            <div>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb bg-light">
                                        <li class="breadcrumb-item"><a href="#">Beranda</a></li>
                                        <li class="breadcrumb-item"><a href="#">Cari Dokter</a></li>
                                        <li class="breadcrumb-item"><a href="./detailDokter"> <span>dr. {data.fullname}  </span></a></li>
                                    </ol>
                                </nav>
                            </div>
                        )
                    })
                }
                {/* { JSON.stringify(ListJadwalDokterNew)} */}
                <div class="content-wrapper">
                    <section class="content">
                        <div class="container-fluid">
                            {
                                ListBioDokter.map(data => {
                                    return (
                                        <div class="row">
                                            <div class="col-4">
                                                <img class="rounded-circle" alt="50x50" src={data.image_path}
                                                    data-holder-rendered="true" />
                                            </div>
                                            <div class="col-4">
                                                <br></br><br></br><br></br>
                                                <span><b>dr. {data.fullname}</b></span> <br></br>
                                                {
                                                    ListBioEduDokter.map(dataEd => {
                                                        return (
                                                            <div>
                                                                <span>{dataEd.spesialisasi}</span><br></br>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {
                                                    ListPengalamanDokter.map(karir => {
                                                        return (
                                                            <div>
                                                                <span>{karir.pengalaman} Tahun Pengalaman</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div class="col-4">
                                                <br></br><br></br><br></br><br></br>
                                                <button class="btn btn-block btn-primary">Chat Dokter</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <br></br><br></br>
                            <div class="row">
                                <div class="col-3">
                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Tindakan Dokter</h3>
                                        </div>
                                        <div class="card-body">
                                            {
                                                ListDokterTindakan.map(dt => {
                                                    return (
                                                        <div>
                                                            <p class="text-muted text-left">
                                                                <span> - {dt.tindakan}</span>
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Riwayat Praktek</h3>
                                        </div>
                                        <div class="card-body">
                                            {
                                                ListDokterRiwayat.map(dtR => {
                                                    return (
                                                        <div>
                                                            <p class="text-muted">
                                                                <span class="tag tag-danger">{dtR.nama_rs}, {dtR.nama_kota}</span><br></br>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <span class="tag tag-danger">Dokter Anak</span>
                                                                    </div>
                                                                    <div class="col">
                                                                        <span class="tag tag-danger">{dtR.tahun_masuk} - {dtR.tahun_keluar}</span>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Pendidikan</h3>
                                        </div>
                                        <div class="card-body">
                                            {
                                                ListDokterEdu.map(dtR => {
                                                    return (
                                                        <div>
                                                            <p class="text-muted">
                                                                <span class="tag tag-danger">{dtR.institution_name}</span><br></br>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <span class="tag tag-danger"> {dtR.end_year} </span>
                                                                    </div>
                                                                </div>
                                                            </p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div class="col-9">
                                    <div class="card">
                                        <div class="card-body">
                                            {
                                                ListRSDokter.map(data => {
                                                    return (
                                                        <div class="card card-widget">
                                                            <div class="card-header">
                                                                <div class="row">
                                                                    <div class="col-8">
                                                                        <span>{data.nama_rs}</span><br></br>
                                                                        <span class="description">{data.alamat}, {data.nama_kota}</span>
                                                                    </div>
                                                                    <div class="text-center col-4">
                                                                        <br></br>
                                                                        <span class="text-blue">Konsultasi mulai dari</span><br></br>
                                                                        {
                                                                            ListStartFrom.map(str => {
                                                                                return (
                                                                                    <div>
                                                                                        <span class="text-blue">Rp.{str.mulai_dari}</span>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <span class="text-blue" data-card-widget="collapse" >Lihat Jadwal Praktek <i class="fas fa-minus"></i></span>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        {
                                                                            ListJadwalDokterNew.map(item => {
                                                                                return (
                                                                                    <div>
                                                                                        {
                                                                                            item.map(subItem => {
                                                                                                if(subItem.rs_id === data.rs_id){
                                                                                                    return (
                                                                                                        <div class="col-8 row">
                                                                                                            <div class="col-6">
                                                                                                                {subItem.day}
                                                                                                            </div>
                                                                                                            <div class="col-6">
                                                                                                                {subItem.jam_mulai} - {subItem.jam_selesai}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                    <div class="text-center col">
                                                                        <button class="btn btn-primary btn-lg">Buat Janji</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >

        )
    }
}