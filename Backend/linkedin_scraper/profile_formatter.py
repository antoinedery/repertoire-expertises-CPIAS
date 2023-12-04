from linkedin_scraper import Person


def profile_to_dict(person: Person):
    dict_profile = {
        'name': person.name,
        'about': person.about,
        'current_job_title': person.job_title,
        'current_company': person.company,
        'experiences': []
    }
    for experience in person.experiences:
        dict_profile['experiences'].append({
            'position_title': experience.position_title,
            'institution_name': experience.institution_name,
            'description': experience.description,
            'duration': experience.duration,
            'from_date': experience.from_date,
            'to_date': experience.to_date,
            'location': experience.location,
        })
    return dict_profile
