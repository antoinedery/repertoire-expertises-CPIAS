import { CheckCircleIcon } from '@chakra-ui/icons';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import mockMembers from '../../data/mockMembers.json';
import colors from '../../utils/theme/colors';
import MemberCard from '../memberCard/MemberCard';
import SearchBar from '../searchBar/SearchBar';

type UserGuideSteps = {
    activeStep: number;
};

const UserGuide: React.FC<UserGuideSteps> = ({ 
    activeStep
}) => {

    /**
     * Returns the content for the active step page based on the current step.
     * @returns {JSX.Element} - The JSX element representing the content for the active step.
     */
    const getActiveStepPage = () => {
        switch (activeStep){
        case 1: {
            return getSearchEnginePage();
        }
        case 2: {
            return getMembersPage();
        }
        case 3: {
            return getCompletedUserGuide();
        }
        default: {
            return getDescriptionPage();
        }}
    };

    /**
     * Open the search examples document in a new browser window.
     */
    const openSearchExamplesDocument = () => {
        const pdfUrl = './documents/search-examples.pdf';
        window.open(pdfUrl, '_blank');
    };

    /**
     * Returns the description page content.
     * @returns {JSX.Element} - The JSX element representing the description page content.
     */
    const getDescriptionPage = () => {
        return (
            <Flex
                width={'100%'}
                gap={'1.5rem'}
                flexWrap={'wrap'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                paddingTop={'1rem'}
                paddingRight={'1rem'}
                alignContent={'flex-start'}
                overflow={'scroll'}
            >
                <Image src={'./images/cpias-logo-white.png'} alt={'cpias'} width='350px' paddingBottom={'1rem'}/>

                <Text textAlign={'justify'} fontWeight={'semibold'}>
                    {'Le répertoire des expertises de la Communauté de pratique IA en santé (CPIAS) représente une solution innovante pour identifier et collaborer avec des experts dans le domaine de l\'IA appliquée à la santé. '}
                    {'Il offre un moteur de recherche avancé qui permet aux utilisateurs de découvrir les membres de la CPIAS en se basant sur leurs compétences spécifiques en IA et en santé. '}
                </Text>
                <Text textAlign={'justify'} fontWeight={'semibold'}>
                    {'Cet outil va au-delà de la simple recherche, puisqu\'il propose également un système de recommandation d\'expertises. '}
                    {'Grâce à cette fonctionnalité, il devient possible de former des équipes multidisciplinaires en toute simplicité, en connectant des professionnels dont les compétences se complètent. '}
                    {'L\'objectif premier de cette application est de favoriser l\'intégration de l\'IA dans le domaine de la santé, en consolidant un répertoire dynamique d\'experts et en facilitant les interactions entre les acteurs clés.'}
                </Text>
            </Flex>
            
        );
    };

    /**
     * Returns the search engine page content.
     * @returns {JSX.Element} - The JSX element representing the search engine page content.
     */
    const getSearchEnginePage = () => {
        return (
            <Flex
                width={'100%'}
                flexWrap={'wrap'}
                alignItems={'flex-start'}
                alignContent={'flex-start'}
                paddingRight={'1rem'}
                gap={'1rem'}
                overflow={'scroll'}
            >
                <Text textAlign={'justify'} paddingY={'1.25rem'} fontWeight={'semibold'}>
                    {'Pour débuter, saisir un nom, des mots-clés ou une problématique de recherche dans la barre de recherche, puis lancer la requête en appuyant sur "Entrer" ou sur l\'icone de loupe. Par exemple :'}
                </Text>
                <Flex
                    width={'100%'}
                    justifyContent={'center'}
                    flexWrap={'wrap'}
                >
                    <Flex
                        width={'100%'}
                        flexWrap={'wrap'}
                        gap={'1.25rem'}
                    >
                        <SearchBar 
                            defaultValue={'Je voudrais connaître le nom de chercheurs en IA qui pourraient m\'aider avec l\'IA générative applicable à des signaux EEG oculaires.'} 
                            isReadOnly={true}
                        />
                        <SearchBar defaultValue={'Je cherche un directeur de thèse, je suis étudiant en informatique et j\'aimerais travailler dans le domaine de la santé, surtout en pédiatrie. J\'ai de l\'expérience en science des données.'} isReadOnly={true}/>
                    </Flex>
                </Flex>
                <Flex
                    width={'100%'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    gap={{ base: '2rem', lg: '1rem' }}
                    paddingY={'1rem'}
                    flexDirection={{ base: 'column', lg: 'row' }}
                >
                    <Text fontWeight={'semibold'}>
                        {'Pour consulter plusieurs exemples de requêtes dans un autre onglet, cliquez sur ce bouton :'}
                    </Text>
                    <Button
                        onClick={()=>openSearchExamplesDocument()}
                        size={'sm'}
                        backgroundColor={colors.darkAndLight.white}
                        color={colors.blue.main}
                        border={`2px solid ${colors.blue.light}`}
                        _hover={{
                            backgroundColor: colors.blue.lighter,
                        }}
                        _active={{
                            backgroundColor: colors.blue.lighter,
                        }}
                    >
                        {'Exemples de requêtes'}
                    </Button>
                </Flex>
                
            </Flex>
        );
    };

    /**
     * Returns the members page content.
     * @returns {JSX.Element} - The JSX element representing the members page content.
     */
    const getMembersPage = () => {
        return (
            <Flex
                width={'100%'}
                flexWrap={'wrap'}
                alignItems={'center'}
                alignContent={'center'}
                paddingTop={'1rem'}

                paddingRight={'1rem'}

                gap={'2rem'}
                overflow={'scroll'}

                zIndex={1}
            >
                <Text textAlign={'justify'} fontWeight={'semibold'}>
                    {'Pour consulter le profil d\'un expert, rendez-vous dans l\'onglet "Membres". '}
                    {'Davantage d\'informations relatives au profil du membre sont disponibles en déroulant le menu.'}
                </Text>
                <Text textAlign={'justify'} fontWeight={'semibold'}>
                    {'Si des informations sont erronées ou requierts une mise à jour, cliquez sur "Corriger les informations" et saisir les informations pour envoyer un courriel à un administrateur.'}
                </Text>
                <Flex
                    width={'100%'}
                    justifyContent={'center'}
                    flexWrap={'wrap'}

                    zIndex={0}
                >
                    <MemberCard member={mockMembers[0]} isReadOnly={true}/>
                </Flex>
            </Flex>
        );
    };

    /**
     * Returns the completed user guide page content.
     * @returns {JSX.Element} - The JSX element representing the completed user guide page content.
     */
    const getCompletedUserGuide = () => {
        return (
            <Flex
                width={'100%'}
                height={'100%'}
                flexWrap={'wrap'}
                alignItems={'center'}
                alignContent={'center'}
                gap={'2rem'}
                overflow={'scroll'}
            >
                <Flex
                    width={'100%'}
                    height={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    alignContent={'center'}
                    gap={'2rem'}
                    flexDirection = {{ base: 'row', md: 'column' }}
                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
                >

                    <CheckCircleIcon 
                        color='green'
                        opacity={'0.90'} 
                        boxSize={16} 
                    />
                    <Text 
                        fontSize={'3xl'} 
                        fontWeight={'bold'} 
                        textAlign={'center'}
                    >
                        {'Tutoriel complété avec succès !'}
                        
                    </Text>

                </Flex>
            </Flex>
        );
    };

    return (
        <Flex
            width={'100%'}
            height={'100%'}
            justifyContent={'center'}
        >
            {getActiveStepPage()}
        </Flex>
    );
};

export default UserGuide;