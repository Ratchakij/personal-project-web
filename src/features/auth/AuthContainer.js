import AuthForm from "./AuthForm";

function AuthContainer() {
  return (
    <div className="container-fluid">
      <div className="mx-auto max-w-245">
        <div className="row">
          <div className="col-12 col-lg-6 ps-xl-0 tw-pt-10 tw-pt-lg-41 tw-ps-lg-10">
            <div className="text-center mx-auto text-lg-start max-w-100 max-w-lg-92 max-w-xl-125">
              <div className="d-flex justify-content-center bd-highlight mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugVWiO68Ak4dR7eR_foQgDhH72RPehSmxtw&usqp=CAU"
                  className="-m-7"
                  alt="healthy-logo"
                />
              </div>
              <br />
              <h2 className="fw-normal mb-0 px-3 px-lg-0 text-6 text-xl-4">
                “Eating healthy food fills your body with energy and nutrients.
                Imagine your cells smiling back at you and saying: “Thank
                you!”.”
                <span className="d-flex justify-content-end  mt-4">
                  - Karen Salmansohn
                </span>
              </h2>
            </div>
          </div>

          <div className="col-12 col-lg-6 pe-xl-0 tw-mt-10 tw-pt-lg-23 tw-pe-lg-10">
            <AuthForm />

            <div className="mt-3 d-flex justify-content-center gap-3 ">
              <i class="fa-solid fa-utensils"></i>
              <i class="fa-solid fa-seedling"></i>
              <i class="fa-solid fa-cloud-meatball"></i>
              <i class="fa-solid fa-martini-glass-citrus"></i>
              <i class="fa-solid fa-champagne-glasses"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthContainer;
