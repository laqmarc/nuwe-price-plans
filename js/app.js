async function openModal() {
// sweetaltert library
    const {value: email} = await Swal.fire({
        title: 'Enter email address to recive more information',
        input: 'email',
        inputPlaceholder: 'email address',
        allowOutsideClick: false,
        showCloseButton: true
    })
    if (email) {
        Swal.fire({
            type: 'success',
            icon: 'success',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            html: `Email address recived. <br> We will send to you the information to<br> ${email} <br> in less than 24 hours`
        })
    };

};