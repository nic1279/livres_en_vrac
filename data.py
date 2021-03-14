from faker import Faker
from main import insert_into_clients

fake_data = Faker()

# List of fake full name
fake_full_name = []
for i in range(1000):
    fake_full_name.append(fake_data.name())

# List of fake first name
fake_first_name = []
for full_name in fake_full_name:
    fake_first_name.append(full_name.split()[0])

# List of fake last name
fake_last_name = []
for full_name in fake_full_name:
    fake_last_name.append(full_name.split()[1])

# List of fake e-mail
fake_email = []
for i in range(1000):
    fake_email.append(fake_data.email())

# List of fake password
fake_password = []
for i in range(1000):
    fake_password.append(fake_data.password())

# List of fake date of birth, between 18 yo and 120 yo
fake_birthdate = []
for i in range(1000):
    fake_dob = (fake_data.date_of_birth(None, 18, 120))
    fake_birthdate.append(fake_dob.strftime('%Y-%m-%d'))

# List of fake adress
fake_adress = []
for i in range(1000):
    fake_adress.append((fake_data.address()).replace('\n', ', '))

# List of fake profiles
fake_profiles = []
fake_list = [fake_email, fake_password, fake_first_name, fake_last_name, fake_adress, fake_birthdate]
for x in range(len(fake_email)):
    fake_profiles.append([item[x] for item in fake_list])
print(fake_profiles)