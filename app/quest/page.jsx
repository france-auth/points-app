"use client";

import React, { useState, useEffect } from 'react';
import { quests as questsData, missions as missionsData } from '@/data';
import Image from 'next/image';
import Layout from '@/components/Layout';
import QuestMissionModal from '@/components/QuestMissionModal';

const Quest = () => {

    const [quests, setQuests] = useState(questsData);
    const [missions, setMissions] = useState(missionsData);
    const [selectedQuest, setSelectedQuest] = useState(null);
    const [selectedMission, setSelectedMission] = useState(null);
    const [missionInProgress, setMissionInProgress] = useState(null);

    // Update quest claimable status based on time elapsed
    useEffect(() => {
        const updatedQuests = quests.map((quest) => {
            const now = new Date();
            const lastClaimedTime = new Date(quest.lastClaimed);
            const diffHours = Math.abs(now - lastClaimedTime) / 36e5;

            // If the quest was claimed more than 24 hours ago, mark it as claimable
            if (quest.lastClaimed && diffHours >= 24) {
                return { ...quest, isClaimable: true };
            }
            return quest;
        });
        setQuests(updatedQuests);
    }, [quests]);

    // Handle mission click and redirect
    const handleMissionClick = (mission) => {
        setMissionInProgress(mission.id);
        window.open(mission.url, '_blank');

        // Set the button to be claimable after 3 seconds
        setTimeout(() => {
            setMissions((prevMissions) =>
                prevMissions.map((m) =>
                    m.id === mission.id ? { ...m, isClaimable: true } : m
                )
            );
            setSelectedMission(mission);
            setMissionInProgress(null);
        }, 3000);
    };

    // Monitor the visibility of the page to set claimable status when the user returns
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden && missionInProgress) {
                setMissions((prevMissions) =>
                    prevMissions.map((m) =>
                        m.id === missionInProgress ? { ...m, isClaimable: true } : m
                    )
                );
                setSelectedMission(
                    missions.find((mission) => mission.id === missionInProgress)
                );
                setMissionInProgress(null);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [missionInProgress, missions]);

    const handleQuestClick = (quest) => {
        setSelectedQuest(quest);
    };

    const handleCloseModal = () => {
        setSelectedQuest(null);
        setSelectedMission(null);
    };

    const handleClaim = () => {
        if (selectedQuest) {
            setQuests((prevQuests) =>
                prevQuests.map((quest) =>
                    quest.id === selectedQuest.id ? { ...quest, isClaimed: true, isClaimable: false } : quest
                )
            );
            setSelectedQuest({ ...selectedQuest, isClaimed: true });
        }
        if (selectedMission) {
            setMissions((prevMissions) =>
                prevMissions.map((mission) =>
                    mission.id === selectedMission.id ? { ...mission, isClaimed: true, isClaimable: false } : mission
                )
            );
            setSelectedMission({ ...selectedMission, isClaimed: true });
        }
    };

    return (
        <Layout>
            <div className='flex flex-col items-center p-4 min-h-screen max-w-full bg-[#9CB2A4]'>
                <h1 className='font-bold mt-4'>DAILY CHECK IN</h1>
                <p>Get your daily points</p>

                {/** QUEST CARDS */}
                <div className='flex flex-col mt-5 w-full items-center'>
                    {quests.map((quest) => (
                        <div 
                        key={quest.id}
                        onClick={() => handleQuestClick(quest)}
                        className={`flex w-full text-sm justify-between mb-1 border rounded-xl border-[#004A50] px-5 py-5 cursor-pointer
                        ${quest.isClaimed ? 'bg-[#B8D2C3]' : 'bg-[#C4DACC]'}`}>
                            <div className='flex justify-evenly'>
                                <Image 
                                src={quest.icon}
                                alt='user icon'
                                className='mr-3'
                                />
                                <div className='flex-col justify-center'>
                                    <p>{quest.task}</p>
                                    <p 
                                    className='text-xs'>
                                        {quest.xp} 
                                        {quest.isClaimed ? (
                                            <span className='font-semibold ml-2'>✓ Claimed</span>
                                        ) : (
                                            quest.isClaimable && <span className='font-semibold ml-2'>Claimable</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div 
                            className='flex items-center'>{quest.arrow}
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className='font-bold mt-14'>MISSION</h1>
                <p>LEVEL-UP with your soul</p>

                <div className='flex flex-col mt-5 mb-1 w-full items-center'>
                    {missions.map((mission) => (
                        <div key={mission.id}
                        onClick={() => handleMissionClick(mission)}
                            className={`flex w-full text-sm justify-between mb-1 border rounded-xl border-[#004A50] px-5 py-5 cursor-pointer
                            ${mission.isClaimed ? 'bg-[#B8D2C3]' : 'bg-[#C4DACC]'}`}>
                            <div className='flex justify-evenly'>
                                <Image 
                                    src={mission.icon}
                                    alt='user icon'
                                    className='mr-3'
                                />
                                <div className='flex-col justify-center'>
                                    <p>{mission.task}</p>
                                    <p 
                                    className='text-xs'>
                                        {mission.xp} 
                                        {mission.isClaimed ? (
                                            <span className='font-semibold ml-2'>✓ Claimed</span>
                                        ) : (
                                            mission.isClaimable && <span className='font-semibold ml-2'>Claimable</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div 
                            className='flex items-center'>{mission.arrow}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedQuest && (
                <QuestMissionModal
                item={selectedQuest}
                onClose={handleCloseModal}
                onClaim={handleClaim}
                />
            )}

            {selectedMission && (
                <QuestMissionModal
                item={selectedMission}
                onClose={handleCloseModal}
                onClaim={handleClaim}
                />
            )}
        </Layout>
    )
}

export default Quest;
