function check(form)
{
    if (form.username.value == "john" && form.id.value == "303030" && form.password.value == "2019")
    {
        $(location).attr('href','homepage.html');
    }
    else
    {
        alert("The username and password you entered does not match");
    }
}