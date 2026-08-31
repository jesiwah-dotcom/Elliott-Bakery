function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}



const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navLinks =
            document.getElementById("navLinks");

        navLinks.classList.remove("active");

    });

});



const customerForm =
    document.getElementById("customerForm");

if (customerForm) {

    customerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get customer name */

            const name =
                document.getElementById(
                    "customerName"
                ).value;


            /* Save customer information */

            localStorage.setItem(
                "customerName",
                name
            );


            /* Success message */

            alert(
                "Welcome to Elliott's Bakery, " +
                name +
                "!\n\n" +
                "Your customer account has been created."
            );


            /* Clear form */

            customerForm.reset();


            /*
                Send customer to
                ordering page
            */

            window.location.href =
                "ORDER.html";

        }
    );

}


/* =====================================================
   BAKERY REGISTRATION
===================================================== */

const bakeryForm =
    document.getElementById("bakeryForm");

if (bakeryForm) {

    bakeryForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get bakery information */

            const bakeryName =
                document.getElementById(
                    "bakeryName"
                ).value;


            const ownerName =
                document.getElementById(
                    "ownerName"
                ).value;


            const bakeryEmail =
                document.getElementById(
                    "bakeryEmail"
                ).value;


            const bakeryPhone =
                document.getElementById(
                    "bakeryPhone"
                ).value;


            const bakeryLocation =
                document.getElementById(
                    "bakeryLocation"
                ).value;


            /*
                Save bakery information
                temporarily in the browser.
            */

            localStorage.setItem(
                "bakeryName",
                bakeryName
            );

            localStorage.setItem(
                "ownerName",
                ownerName
            );

            localStorage.setItem(
                "bakeryEmail",
                bakeryEmail
            );

            localStorage.setItem(
                "bakeryPhone",
                bakeryPhone
            );

            localStorage.setItem(
                "bakeryLocation",
                bakeryLocation
            );


            /* Success message */

            alert(
                "Congratulations " +
                ownerName +
                "!\n\n" +
                bakeryName +
                " has been successfully registered.\n\n" +
                "Click OK to continue to the pastry ordering page."
            );


            /* Clear form */

            bakeryForm.reset();


            /*
                Send user to ordering page
            */

            window.location.href =
                "ORDER.html";

        }
    );

}


/* =====================================================
   ORDER FORM
===================================================== */

const orderForm =
    document.getElementById("orderForm");

if (orderForm) {


    /* -----------------------------------------------
       GET FORM ELEMENTS
    ----------------------------------------------- */

    const pastry =
        document.getElementById("pastry");

    const quantity =
        document.getElementById("quantity");

    const summaryPastry =
        document.getElementById(
            "summaryPastry"
        );

    const summaryQuantity =
        document.getElementById(
            "summaryQuantity"
        );


    /* -----------------------------------------------
       UPDATE ORDER SUMMARY
    ----------------------------------------------- */

    function updateOrderSummary() {

        if (summaryPastry) {

            if (pastry.value === "") {

                summaryPastry.textContent =
                    "Not selected";

            } else {

                summaryPastry.textContent =
                    pastry.value;

            }

        }


        if (summaryQuantity) {

            summaryQuantity.textContent =
                quantity.value;

        }

    }


    /* -----------------------------------------------
       WATCH FOR PASTRY CHANGE
    ----------------------------------------------- */

    if (pastry) {

        pastry.addEventListener(
            "change",
            updateOrderSummary
        );

    }


    /* -----------------------------------------------
       WATCH FOR QUANTITY CHANGE
    ----------------------------------------------- */

    if (quantity) {

        quantity.addEventListener(
            "input",
            updateOrderSummary
        );
    }

    /* -----------------------------------------------
       ORDER SUBMISSION
    ----------------------------------------------- */

    orderForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get customer information */

            const customerName =
                document.getElementById(
                    "customerName"
                ).value;


            const customerEmail =
                document.getElementById(
                    "customerEmail"
                ).value;


            const customerPhone =
                document.getElementById(
                    "customerPhone"
                ).value;


            /* Get order information */

            const selectedPastry =
                document.getElementById(
                    "pastry"
                ).value;


            const selectedQuantity =
                document.getElementById(
                    "quantity"
                ).value;


            const deliveryLocation =
                document.getElementById(
                    "deliveryLocation"
                ).value;


            const message =
                document.getElementById(
                    "message"
                ).value;


            /* ---------------------------------------
               CREATE ORDER MESSAGE
            --------------------------------------- */

            const orderMessage =

                "NEW PASTRY ORDER\n\n" +

                "Customer Name: " +
                customerName +
                "\n" +

                "Customer Email: " +
                customerEmail +
                "\n" +

                "Customer Phone: " +
                customerPhone +
                "\n\n" +

                "Pastry: " +
                selectedPastry +
                "\n" +

                "Quantity: " +
                selectedQuantity +
                "\n\n" +

                "Delivery Location: " +
                deliveryLocation +
                "\n\n" +

                "Special Request: " +
                message;


            /* ---------------------------------------
               EMAIL SUBJECT
            --------------------------------------- */

            const emailSubject =
                "New Pastry Order - Elliott's Bakery";


            /* ---------------------------------------
               SUCCESS MESSAGE
            --------------------------------------- */

            alert(
                "Thank you, " +
                customerName +
                "!\n\n" +

                "Your order has been prepared successfully.\n\n" +

                "Pastry: " +
                selectedPastry +
                "\n" +

                "Quantity: " +
                selectedQuantity +
                "\n\n" +

                "Click OK to continue."
            );


            /* ---------------------------------------
               OPEN EMAIL APPLICATION
            --------------------------------------- */

            window.location.href =

                "mailto:elliotsbakery@example.com" +

                "?subject=" +

                encodeURIComponent(
                    emailSubject
                ) +

                "&body=" +

                encodeURIComponent(
                    orderMessage
                );


            /* ---------------------------------------
               RESET FORM
            --------------------------------------- */

            orderForm.reset();


            /* Reset summary */

            updateOrderSummary();

        }
    );

}

 // Show Comment Box

    function showReviewBox() {

        document.getElementById("reviewBox")
            .style.display = "block";

        document.getElementById("reviewInput")
            .focus();
    }


    // Add Comment

    function addReview() {

        let review =
            document.getElementById("reviewInput").value;

        if (review === "") {

            alert("Please add a review!");

            return;
        }

        let newComment =
            document.createElement("div");

        newComment.className = "review";

        newComment.innerHTML =
            "<b>You</b> " + review;

        document.getElementById("reviews")
            .appendChild(newComment);

        document.getElementById("reviewInput")
            .value = "";
    }
