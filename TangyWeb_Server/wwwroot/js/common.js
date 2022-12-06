window.ShowToastr = (type, message) => {
    if (type == "success") {
        // Display a success toast, with a title
        toastr.success(message, 'Operation Successful', { timeOut: 5000 })
    }
    if (type == "error") {
        // Display a success toast, with a title
        toastr.error(message, 'Operation failed', { timeOut: 5000 })
    }
}

window.ShowSwal = (type, message) => {
    if (type == "success") {
        Swal.fire(
            'Success Notification!',
            message,
            'success'
        )
    }
    if (type == "error") {
        Swal.fire(
            'Success Notification!',
            message,
            'error'
        )
    }
}

function ShowDeleteConfirmationModal() {
    $("#deleteConfirmationModal").modal("show");
}

function HideDeleteConfirmationModal() {
    $("#deleteConfirmationModal").modal("hide");
}