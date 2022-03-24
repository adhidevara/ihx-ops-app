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
            ListDokterEduAll: [], // spesialisasi dokter
            ListJanjiDokter: [],
            ListChatDokter: []
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

        console.log(respon)

    }

    getDokterEduBio = async (doctor_id) => {
        const respon = await dokterService.dokterinstitutionEdu(doctor_id)
        if (respon.success) {
            this.setState({
                ListDokterEdu: respon.result
            })
        }

        console.log(respon)

    }

    getDokterTindakan = async (doctor_id) => {
        const respon = await dokterService.dokterTindakan(doctor_id)
        if (respon.success) {
            this.setState({
                ListDokterTindakan: respon.result
            })
        }

        console.log(respon)

    }

    getDokterRiwayat = async (doctor_id) => {
        const respon = await dokterService.dokterRiwayat(doctor_id)
        if (respon.success) {
            this.setState({
                ListDokterRiwayat: respon.result
            })
        }

        console.log(respon)

    }

    getDokterEduAll = async () => {
        const respon = await dokterService.dokterEduAll()
        if (respon.success) {
            this.setState({
                ListDokterEduAll: respon.result
            })
        }

        console.log(respon)

    }

    getDokterEdu = async (doctor_id) => {
        const respon = await dokterService.dokterinstitutionEdu(doctor_id)
        if (respon.success) {
            this.setState({
                ListDokterEdu: respon.result
            })
        }

        console.log(respon)

    }

    getJanjiDokter = async (doctor_id) => {
        const respon = await dokterService.janjiDokter(doctor_id)
        if (respon.success) {
            this.setState({
                ListJanjiDokter: respon.result
            })
        }

        console.log(respon)

    }

    getChatDokter = async (doctor_id) => {
        const respon = await dokterService.chatDokter(doctor_id)
        if (respon.success) {
            this.setState({
                ListChatDokter: respon.result
            })
        }

        console.log(respon)

    }

    componentDidMount() {
        const id = localStorage.getItem('id')
        this.getBioDokter(id)
        this.getBioEduDokter(id)
        this.getDokterEduBio(id)
        this.getDokterTindakan(id)
        this.getDokterRiwayat(id)
        this.getDokterEdu(id)
        this.getDokterEduAll(id)
        this.getJanjiDokter(id)
        this.getChatDokter(id)
    }


    render() {
        const { showModal, ListBioDokter, ListBioEduDokter, ListDokterRiwayat, ListDokterTindakan, ListDokterEdu, ListJanjiDokter, ListChatDokter }
            = this.state
        return (
            <div>
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-light">
                            <li class="breadcrumb-item"><a href="#">Beranda</a></li>
                            <li class="breadcrumb-item"><a href="./profileDokter">Profil</a></li>
                        </ol>
                    </nav>
                </div>
                {/* {JSON.stringify(this.state.ProModel)} */}
                <div class="content-wrapper">
                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="card card-primary card-outline">
                                        <div class="card-body box-profile">
                                            <a class="float-right" href="#"><i class="fas fa-pencil-alt"></i></a>
                                            {
                                                ListBioDokter.map(data => {
                                                    return (
                                                        <div class="text-center">
                                                            <img class="profile-user-img img-fluid img-circle"
                                                                src={data.image_path}
                                                                alt="User profile picture" />
                                                            <h3 class="profile-username text-center"> dr. {data.fullname}  </h3>
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                ListBioEduDokter.map(dataEd => {
                                                    return (
                                                        <div class="text-center">
                                                            <p class="text-muted text-center">{dataEd.spesialisasi}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <ul class="list-group list-group-unbordered mb-3">
                                                {
                                                    ListJanjiDokter.map(janji => {
                                                        return (
                                                            <div>
                                                                <li class="list-group-item">
                                                                    <b>Janji</b> <a class="float-right" href="#">{janji.count_janji}</a>
                                                                </li>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {
                                                    ListChatDokter.map(chat => {
                                                        return (
                                                            <div>
                                                                <li class="list-group-item">
                                                                    <b>Obrolan / Konsultasi</b> <a class="float-right" href="#">{chat.count_chat}</a>
                                                                </li>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="card card-primary">
                                        <div class="card-header">
                                            <h3 class="card-title">Tentang Saya</h3>
                                        </div>
                                        <div class="card-body">
                                            <strong><i class="far fa-file-alt mr-1"></i>Tindakan Medis</strong> <br></br>
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
                                            <hr />
                                            <strong><i class="fas fa-map-marker-alt mr-1"></i> Riwayat Praktek</strong><br></br>
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
                                            <hr />
                                            <strong><i class="fas fa-book mr-1"></i> Pendidikan</strong>
                                            <div>
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
                                </div>
                                {/* end card md 3 */}

                                <div class="col-md-9">
                                    <div class="card">
                                        <div class="card-header p-2">
                                            <ul class="nav nav-pills">
                                                <li class="nav-item"><a class="nav-link active" href="#tindakan" data-toggle="tab">Tindakan</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#activity" data-toggle="tab">Activity</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Konsultasi</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Pengaturan</a></li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-content">

                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end col md 9 */}
                            </div>
                        </div>
                    </section>
                </div>
            </div >

        )
    }
}