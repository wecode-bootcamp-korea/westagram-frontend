const $id = document.querySelector('#id');
const $password = document.querySelector('#password');
const $loginForm = document.querySelector('.login-form');
const $loginBtn = document.querySelector('.login-btn');


/*
 * 1. ���̵� �Է��Ѵ�.
 * 2. ��й�ȣ�� �Է��Ѵ�.
 * 3. �Է��� ���� ���̵��� ������ �����Ѵ�. * 
 * 4. �Է��� ���� ��й�ȣ��� ������ �����Ѵ�. 
 * 5. ���̵� 1�� �̻����� üũ�Ѵ�.
 * 6. �׸��� ��й�ȣ�� 1�� �̻��̴�. 
 * */


$loginForm.addEventListener('keyup', function () {
    if ($id.value.length === 0 || $password.value.length === 0) {
        $loginBtn.style.backgroundColor = "#B2DFFC";
        return;
    }
    else if ($id.value.length >= 1 && $password.value.length >= 1) {
        $loginBtn.style.backgroundColor = "blue";
        return;
    }
    
})

